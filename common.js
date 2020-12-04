const classes = {
    editor: "editor",
    editorContainerItem: "editor-container-item",
    basicInfoDiv: "editor__basic-info",
    controls: "editor__controls",
    desc: "editor__desc",
    descTextArea: "editor__desc__text-editor",
    descTextAreaLabel: "editor__desc__text-editor-label",
    imgSelector: "editor__img-selector",
    imgSelectorController: "editor__img-selector-controller",
    caption: "editor__caption",
    basicInfoNameField: "editor__basic-info__name",
    basicInfoNameFieldLabel: "editor__basic-info__name__label",
    basicInfoDateField: "editor__basic-info__date",
    basicInfoDateFieldLabel: "editor__basic-info__date__label",
    controlsDeleteBtn: "editor__controls__delete",
    controlsArchiveBtn: "editor__controls__archive",
    imageSelectorInner: "editor__image-selector__image",
    imgSelectorControllerChooseButtonLabel: "editor__image-selector-controller__select-btn-label",
    imgSelectorControllerChooseButton: "editor__image-selector-controller__select-btn",
    captionText: "editor__caption__text-area",
    captionLabel: "editor__caption__label",
    objectSelectorContainer: "object-selector",
    objectSelector: "object-selector__list",
    objectSelectorItem: "object-selector__list__item"
}

let common = {
    ctr: 1
};


/**
 * Creates and formats editor grid
 * @param {HTMLDivElement} editorDiv the container for the grid
 * @param {Number} ctr counter for generation of unique ids
 */
function createGridFramework(editorDiv, ctr) {
    // outer grid cells
    let basicInfoDiv = createDiv(classes.basicInfoDiv, ctr, editorDiv);
    let controlsDiv = createDiv(classes.controls, ctr, editorDiv);
    let descDiv = createDiv(classes.desc, ctr, editorDiv);
    let imgSelectorDiv = createDiv(classes.imgSelector, ctr, editorDiv);
    let imgSelectorControllerDiv = createDiv(classes.imgSelectorController, ctr, editorDiv);
    let captionDiv = createDiv(classes.caption, ctr, editorDiv);

    // now create inner components
    basicInfoInit(basicInfoDiv, ctr);
    controlsInit(controlsDiv, ctr);
    descInit(descDiv, ctr);
    imageSelectorInit(imgSelectorDiv, ctr);
    imageSelectorControllerInit(imgSelectorControllerDiv, ctr);
    captionInit(captionDiv, ctr);
}

function basicInfoInit(basicInfoDiv, ctr) {
    // info for date field
    const date = new Date();
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const today = date.getFullYear() +" -" + (month) + "-" + (day) ;

    // name field
    let basicInfoNameField = document.createElement("input");
    basicInfoNameField.type = "text";
    basicInfoNameField.classList.add("form-control", classes.basicInfoNameField);
    basicInfoNameField.id = classes.basicInfoNameField + ctr;
    basicInfoNameField.placeholder = "Enter name here";
    basicInfoNameField.oninput = () => {
        let selectorItem = document.getElementById(classes.objectSelectorItem + ctr).getElementsByTagName("a")[0];
        selectorItem.innerText = basicInfoNameField.value;
    }

    let basicInfoNameFieldLabel = document.createElement("label");
    basicInfoNameFieldLabel.htmlFor = classes.basicInfoNameField + ctr;
    basicInfoNameFieldLabel.classList.add(classes.basicInfoNameFieldLabel);
    basicInfoNameFieldLabel.id = classes.basicInfoNameFieldLabel + ctr;
    basicInfoNameFieldLabel.innerText = "Name";

    // date field
    let basicInfoDateField = document.createElement("input");
    basicInfoDateField.type = "date";
    basicInfoDateField.value = today; // set default value to today
    basicInfoDateField.classList.add("form-control", classes.basicInfoDateField);
    basicInfoDateField.id = classes.basicInfoDateField + ctr;

    let basicInfoDateFieldLabel = document.createElement("label");
    basicInfoDateFieldLabel.htmlFor = classes.basicInfoDateField + ctr;
    basicInfoDateFieldLabel.innerText = "Publication Date";
    basicInfoDateFieldLabel.classList.add(classes.basicInfoDateFieldLabel);
    basicInfoDateFieldLabel.id = classes.basicInfoDateFieldLabel + ctr;

    // put it all together
    basicInfoDiv.appendChild(basicInfoNameFieldLabel);
    basicInfoDiv.appendChild(basicInfoNameField);
    basicInfoDiv.appendChild(document.createElement("br"));
    basicInfoDiv.appendChild(basicInfoDateFieldLabel);
    basicInfoDiv.appendChild(basicInfoDateField);
}

function controlsInit(controlsDiv, ctr) {
    // delete button
    let controlsDeleteBtn = document.createElement("button");
    controlsDeleteBtn.classList.add("btn", "btn-default", classes.controlsDeleteBtn);
    controlsDeleteBtn.innerHTML = "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>" +
        " Delete Product";
    controlsDeleteBtn.id = classes.controlsDeleteBtn + ctr;

    // archive button
    let controlsArchiveButton = document.createElement("button");
    controlsArchiveButton.classList.add("btn", "btn-default", "hidden", classes.controlsArchiveBtn);
    controlsArchiveButton.innerHTML = "<span class=\"glyphicon glyphicon-archive-fill\" aria-hidden=\"true\"></span>"
    controlsArchiveButton.id = classes.controlsArchiveBtn + ctr;

    // put everything together
    controlsDiv.appendChild(controlsArchiveButton);
    controlsDiv.appendChild(controlsDeleteBtn);
}

function descInit(descDiv, ctr) {
    // actual text area
    let descText = document.createElement("textarea");
    descText.rows = 22;
    descText.id = classes.descTextArea + ctr;
    descText.classList.add("form-control", classes.descTextArea);
    descText.placeholder = "Enter description here";

    // label for text area
    let descTextLabel = document.createElement("label");
    descTextLabel.innerText = "Description";
    descTextLabel.classList.add(classes.descTextAreaLabel);
    descTextLabel.id = classes.descTextAreaLabel + ctr;
    descTextLabel.htmlFor = classes.descTextArea + ctr;

    // put it all together
    descDiv.appendChild(descTextLabel);
    descDiv.appendChild(descText);
}

function imageSelectorInit(imageSelectorDiv, ctr) {
    // blank image
    let imageSelectorInnerImg = document.createElement("img");
    imageSelectorInnerImg.classList.add(classes.imageSelectorInner);
    imageSelectorInnerImg.id = classes.imageSelectorInner + ctr;
    imageSelectorInnerImg.src = "#";

    // put everything together
    imageSelectorDiv.appendChild(imageSelectorInnerImg);
}

function imageSelectorControllerInit(imageSelectorControllerDiv, ctr) {
    // container for label and input element
    let outerContainerDiv = createDiv(["input-group", "mb-3"]);
    let containerDiv = createDiv("custom-file");

    // label container
    let selectorBtn = document.createElement("label");
    selectorBtn.classList.add("custom-file-label", classes.imgSelectorControllerChooseButtonLabel);
    selectorBtn.id = classes.imgSelectorControllerChooseButtonLabel + ctr;
    selectorBtn.htmlFor = classes.imgSelectorControllerChooseButton + ctr;
    selectorBtn.innerText = "Select Image";

    // actual input element
    let actualBtn = document.createElement("input");
    actualBtn.type = "file";
    actualBtn.classList.add("custom-file-input", classes.imgSelectorControllerChooseButton);
    actualBtn.id = classes.imgSelectorControllerChooseButton + ctr;
    actualBtn.onchange = () => { // when image file is changed, update thumbnail image and filepath
        if(actualBtn.files && actualBtn.files[0]) {
            // first set filepath
            selectorBtn.innerText = actualBtn.value.split("\\").pop();

            // now set image thumbnail
            let reader = new FileReader();
            let imageSelectorId = classes.imageSelectorInner + ctr;
            reader.readAsDataURL(actualBtn.files[0]);
            reader.onloadend = e => {
                document.getElementById(imageSelectorId).src = e.target.result;
            }
        }
    };
    // clear upload on click
    actualBtn.onclick = () => {
        actualBtn.value = null;
        let imageSelectorId = classes.imageSelectorInner + ctr;
        document.getElementById(imageSelectorId).src = "#";
    }

    // put everything together
    containerDiv.appendChild(actualBtn);
    containerDiv.appendChild(selectorBtn);
    outerContainerDiv.appendChild(containerDiv);
    imageSelectorControllerDiv.appendChild(outerContainerDiv);

}

function captionInit(captionDiv, ctr) {
    // caption box
    let captionBox = document.createElement("textarea");
    captionBox.classList.add("form-control", classes.captionText);
    captionBox.id = classes.captionText + ctr;
    captionBox.rows = 3;
    captionBox.placeholder = "Enter caption here";

    // label for caption box
    let captionLabel = document.createElement("label");
    captionLabel.htmlFor = classes.captionText + ctr;
    captionLabel.classList.add(classes.captionLabel);
    captionLabel.innerText = "Image Caption";

    // put everything together
    captionDiv.appendChild(captionLabel);
    captionDiv.appendChild(captionBox);
}

function createListItem(ctr) {
    // list item
    let listItem = document.createElement("li");
    listItem.classList.add(classes.objectSelectorItem/*, "active"*/);
    listItem.id = classes.objectSelectorItem + ctr;

    // inner link
    let innerLink = document.createElement("a");
    innerLink.href = "#" + classes.editorContainerItem + ctr;
    innerLink.innerText = "Untitled";
    innerLink.setAttribute("data-toggle", "tab");

    listItem.appendChild(innerLink);
    let selector = document.getElementById(classes.objectSelector);
    selector.appendChild(listItem);

    $("#" + classes.objectSelectorItem + ctr + " a").on("click", () => {
        $("#" + classes.objectSelectorItem + " li:last-child a").tab("show");
    });
    $("#" + classes.objectSelectorItem + " li:last-child a").tab("show");
}


// UTILITY FUNCTIONS:

/**
 * Creates a div with the specified properties
 * @param {String | String[]} divClass a class or list of classes for the div
 * @param {Number} [counter] the id for the div
 * @param {HTMLDivElement} [container] contained element for the div
 * @returns {HTMLDivElement} created div with specified properties
 */
function createDiv(divClass, counter, container) {
    let newDiv = document.createElement("div");
    const isArray = Array.isArray(divClass);
    if(isArray) {
        for(let i = 0; i < divClass.length; i++) {
            newDiv.classList.add(divClass[i]);
        }
    } else {
        newDiv.classList.add(divClass);
    }

    if(counter) {
        if(isArray && divClass.length > 0) {
            newDiv.id = divClass[0] + counter;
        } else if(!isArray) {
            newDiv.id = divClass + counter;
        } else {
            newDiv.id = counter.toString();
        }
    }

    if(container) {
        container.appendChild(newDiv);
    }

    return newDiv;
}