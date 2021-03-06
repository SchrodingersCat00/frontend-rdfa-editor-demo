import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditorEditController extends Controller {
  @action
  handleRdfaEditorInit(editor) {
    this.set('editor', editor);
  }

  @action
  /*
   * Save the document
   */
  async save() {
    let editorDocument = this.model;
    editorDocument.set('modifiedOn', new Date());
    editorDocument.set('content', this.editor.htmlContent);

    this.editor.setHtmlContent(editorDocument.content);
    await editorDocument.save();
  }
}
