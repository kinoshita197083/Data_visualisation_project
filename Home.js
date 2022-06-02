//Display Tooltip
function showTooltip(evt) {
    if (evt.path[0] == tri1) {
        tooltip1.setAttributeNS(null, "display", "block");
    }
    else if (evt.path[0] == tri2) {
        tooltip2.setAttributeNS(null, "display", "block");
    }
    else {
        tooltip3.setAttributeNS(null, "display", "block");
    }
    console.log(evt)
}

//Hide Tooltip
function hideTooltip() {
    tooltip1.setAttributeNS(null, "display", "none");
    tooltip2.setAttributeNS(null, "display", "none");
    tooltip3.setAttributeNS(null, "display", "none");
}