<%*
const typeField = await tp.system.prompt("Enter the type (Character, Location, Session, Group, Item):");
let folderName;

if (typeField.toLowerCase() === "character") {
    folderName = "Characters";
} else if (typeField.toLowerCase() === "location") {
    folderName = "Locations";
} else if (typeField.toLowerCase() === "session") {
    folderName = "Sessions";
} else if (typeField.toLowerCase() === "group") {
    folderName = "Groups";
} else if (typeField.toLowerCase() === "item") {
    folderName = "Items";
} else {
    folderName = "Misc";
}

// Capitalize first letter of type
const typeLine = typeField.charAt(0).toUpperCase() + typeField.slice(1).toLowerCase();

let bodyContent = "";

// Character
if (typeField.toLowerCase() === "character") {
	headerContent=  `
**Groups:**

**Characters:**

**Locations:**
`
    bodyContent = `
`;
// Location
} else if (typeField.toLowerCase() === "location") {
    headerContent=  `
**Factions:**

**Location Type:**

**Parent Location:**
`
    bodyContent = `
`;
// Session
} else if (typeField.toLowerCase() === "session") {
	headerContent=  `
**Title:** **

**Date:**

**Locations:**

**Characters:**

**Groups:**
`
    bodyContent = `
# Session Summary


# Important items


# Misc
`;
// Group
} else if (typeField.toLowerCase() === "group") {
	headerContent=  `
**Characters:**

**Locations:**
`
    bodyContent = `
`;
// Item
} else if (typeField.toLowerCase() === "item") {
	headerContent=  `
**Characters:**

**Groups:**

**Locations:**
`
    bodyContent = `
`;
} else {
	headerContent=  `

`
    bodyContent = `
`;
}

const finalContent = `------------------------------------------------------------------------
${headerContent}
------------------------------------------------------------------------
${bodyContent}`;

await tp.file.move(`${folderName}/${tp.file.title}`);
tR += finalContent;
_%>