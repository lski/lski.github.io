"use strict";var dispatcher=dispatcher,constants=constants,ctx=ctx,folderActions={load:function(){ctx.getFolderTree().then(function(t){dispatcher.dispatch({action:constants.FOLDERS_LOADED,data:t})})},setSelected:function(t){dispatcher.dispatch({action:constants.SELECTED_FOLDER_CHANGED,data:t})}};
//# sourceMappingURL=../../maps/app/actions/folder-actions.js.map
