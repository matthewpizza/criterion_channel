"use strict"

// All films list (films.criterionchannel.com)
if (document.getElementById("gridview")) {
    // Makes the entire movie row clickable
    document.querySelectorAll("tr[data-href]").forEach(row => {
        const link = document.createElement("a")
        link.href = row.dataset.href
        Object.assign(link.style, {
            position: "absolute",
            top: 0,
            left: 0,
            display: "block",
            width: "100%",
            height: "100%",
            zIndex: 1,
        })
        row.appendChild(link)
    })
}
