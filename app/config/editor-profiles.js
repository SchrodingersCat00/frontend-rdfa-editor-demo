export default {
  /**
   * This is where we configure the plugins that are active in the editor
   * - date-overwrite-plugin : allow the user to update the date when a span with datatype="xsd:date" is found [https://github.com/lblod/ember-rdfa-editor-date-overwrite-plugin]
   * - date-plugin : when the user types a date in the document, asks if we want to insert it as a proper rdfa date [https://github.com/lblod/ember-rdfa-editor-date-plugin]
   * - standard-template-plugin : allow the user to insert template when typing keywords in the editor [https://github.com/lblod/ember-rdfa-editor-standard-template-plugin]
   * - wikipedia-slug-plugin : when typing dbp:xxx, searches for xxx on dbpedia and insert the link when found [https://github.com/lblod/ember-rdfa-editor-wikipedia-slug-plugin]
   * - dbpedia-info-plugin : fetches info about a dbpedia link and displays them in a card [https://github.com/lblod/ember-rdfa-editor-dbpedia-info-plugin]
  */
  default: [
    "rdfa-editor-date-plugin",
    "rdfa-editor-date-overwrite-plugin",
    //"rdfa-editor-standard-template-plugin",
    "rdfa-editor-wikipedia-slug-plugin",
    "rdfa-editor-dbpedia-info-plugin"
  ],
  none: []
};
