import { SingleButtonOperation, pxButtonOperation, reportButtonOperation, addButtonOperation, deleteButtonOperation } from '../commands/operations/single-button.operation'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { MenuItemType } = (window as any).UniverUi


export function CustomMenuItemSingleButtonFactory() {
  return {
    // Bind the command id, clicking the button will trigger this command
    id: SingleButtonOperation.id,
    // The type of the menu item, in this case, it is a button
    type: MenuItemType.BUTTON,
    // The icon of the button, which needs to be registered in ComponentManager
    icon: 'fx',
    // The tooltip of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    tooltip: '主体分析',
    // The title of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    title: '主体分析'
  }
}
export function CustomMenuItemPxButtonFactory() {
  return {
    // Bind the command id, clicking the button will trigger this command
    id: pxButtonOperation.id,
    // The type of the menu item, in this case, it is a button
    type: MenuItemType.BUTTON,
    // The icon of the button, which needs to be registered in ComponentManager
    icon: 'px',
    // The tooltip of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    tooltip: '违约概率降序',
    // The title of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    title: ''
  }
}
export function CustomMenuItemReportButtonFactory() {
  return {
    // Bind the command id, clicking the button will trigger this command
    id: reportButtonOperation.id,
    // The type of the menu item, in this case, it is a button
    type: MenuItemType.BUTTON,
    // The icon of the button, which needs to be registered in ComponentManager
    icon: 'report',
    // The tooltip of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    tooltip: '生成报告',
    // The title of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    title: '生成报告'
  }
}
export function CustomMenuItemAddButtonFactory() {
  return {
    // Bind the command id, clicking the button will trigger this command
    id: addButtonOperation.id,
    // The type of the menu item, in this case, it is a button
    type: MenuItemType.BUTTON,
    // The icon of the button, which needs to be registered in ComponentManager
    icon: 'add',
    // The tooltip of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    tooltip: '添加至分组',
    // The title of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    title: '添加至分组'
  }
}
export function CustomMenuItemDeleteButtonFactory() {
  return {
    // Bind the command id, clicking the button will trigger this command
    id: deleteButtonOperation.id,
    // The type of the menu item, in this case, it is a button
    type: MenuItemType.BUTTON,
    // The icon of the button, which needs to be registered in ComponentManager
    icon: 'delete',
    // The tooltip of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    tooltip: '从名单移除',
    // The title of the button. Prioritize matching internationalization. If no match is found, the original string will be displayed
    title: '从名单移除'
  }
}
