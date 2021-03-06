(ns athens.views.daily-notes
  (:require
    [athens.db :as db]
    [athens.style :refer [DEPTH-SHADOWS]]
    [athens.util :refer [get-day uid-to-date]]
    [athens.views.node-page :refer [node-page-component]]
    [cljsjs.react]
    [cljsjs.react.dom]
    [goog.dom :refer [getElement]]
    [goog.functions :refer [debounce]]
    [posh.reagent :refer [q pull-many]]
    [re-frame.core :refer [dispatch subscribe]]
    [stylefy.core :refer [use-style]]))


;;; Styles


(def daily-notes-scroll-area-style
  {:min-height "calc(100vh + 1px)"
   :display        "flex"
   :padding        "1.25rem 0"
   :align-items    "stretch"
   :flex           "1 1 100%"
   :flex-direction "column"})


(def daily-notes-page-style
  {:box-shadow (:16 DEPTH-SHADOWS)
   :align-self "stretch"
   :justify-self "stretch"
   :margin "1.25rem 2.5rem"
   :padding "1rem 2rem"
   :transition-duration "0s"
   :border-radius "0.5rem"
   :min-height "calc(100vh - 10rem)"})


(def daily-notes-notional-page-style
  (merge daily-notes-page-style {:box-shadow (:4 DEPTH-SHADOWS)
                                 :opacity "0.5"}))


;;; Helpers



(defn scroll-daily-notes
  [_]
  (let [daily-notes @(subscribe [:daily-notes/items])
        el          (getElement "daily-notes")
        offset-top  (.. el -offsetTop)
        rect        (.. el getBoundingClientRect)
        from-bottom (.. rect -bottom)
        from-top    (.. rect -top)
        doc-height  (.. js/document -documentElement -scrollHeight)
        top-delta   (- offset-top from-top)
        bottom-delta (- from-bottom doc-height)]
    ;; Don't allow user to scroll up for now.
    (cond
      (< top-delta 1) nil #_(dispatch [:daily-note/prev (get-day (uid-to-date (first daily-notes)) -1)])
      (< bottom-delta 1) (dispatch [:daily-note/next (get-day (uid-to-date (last daily-notes)) 1)]))))


(def db-scroll-daily-notes (debounce scroll-daily-notes 500))


;;; Components


(defn daily-notes-panel
  []
  (let [note-refs (subscribe [:daily-notes/items])]
    (fn []
      (if (empty? @note-refs)
        (dispatch [:daily-note/next (get-day)])
        (let [notes (some->> @(q '[:find [?uid ...]
                                   :in $ [?uid ...]
                                   :where [?e :block/uid ?uid]]
                                 db/dsdb @note-refs)
                             not-empty
                             sort
                             reverse
                             (map (fn [x] [:block/uid x]))
                             (pull-many db/dsdb '[*])
                             deref)]
          [:div#daily-notes (use-style daily-notes-scroll-area-style)
           #_[:div (use-style (merge daily-notes-page-style {:box-shadow (:4 DEPTH-SHADOWS)
                                                             :opacity "0.5"
                                                             :min-height "10vh"}))
              [:h1 "Later"]]
           (doall
             (for [{:keys [block/uid]} notes]
               ^{:key uid}
               [:<>
                [:div (use-style daily-notes-page-style)
                 [node-page-component [:block/uid uid]]]]))
           [:div (use-style daily-notes-notional-page-style)
            [:h1 "Earlier"]]])))))
