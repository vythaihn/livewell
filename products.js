
// $(document).on("ready", () => {
//     $(".nav-tabs a").on("click", () => {
//         $(this).tab('show');
//     });
// });



function addEditorTrigger() {
    // create editor
    let editorContainerItem = createDiv([classes.editorContainerItem, "tab-pane", "fade"], common.ctr);
    let editorItem = createDiv(classes.editor, common.ctr);
    createGridFramework(editorItem, common.ctr);
    editorContainerItem.appendChild(editorItem);
    document.getElementById("editor-container").appendChild(editorContainerItem);

    // create and select list item
    createListItem(common.ctr);

    common.ctr++;
}