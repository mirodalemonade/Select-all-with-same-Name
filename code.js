
function main() {
    if (figma.currentPage.selection.length !== 1){
        figma.closePlugin("Select one object!")
        return
    }

    let savedName = figma.currentPage.selection[0].name

    function isSameName(node) {
        return node.name === savedName
    }

    let nodes = figma.currentPage.findAll(isSameName)

    figma.currentPage.selection = nodes

    figma.closePlugin("Objects Selected!")
    return
}

main()