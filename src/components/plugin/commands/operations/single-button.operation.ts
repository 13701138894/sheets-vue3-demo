// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { CommandType, IUniverInstanceService, UniverInstanceType } = (window as any).UniverCore
const { SheetsSelectionsService } = (window as any).UniverSheets

const getSelectRange = (accessor) => {
  const sheetSelectionManagerService = accessor.get(SheetsSelectionsService)
  const currentSelection = sheetSelectionManagerService.getCurrentSelections()
  const { startRow, endRow } = currentSelection[0].range
  return { startRow, endRow }
}

export const SingleButtonOperation = {
  id: 'fx',
  type: CommandType.OPERATION,
  handler: async (accessor) => {
    const { startRow, endRow } = getSelectRange(accessor)
    if (startRow === 0) return
    if (startRow !== endRow) return showMessage('请选择一个主体分析')
    // .... bus.emit('xxx')
    return true
  }
}
export const pxButtonOperation = {
  id: 'px',
  type: CommandType.OPERATION,
  handler: async (accessor) => {

    alert('降序')
    return true
  }
}
export const reportButtonOperation = {
  id: 'report',
  type: CommandType.OPERATION,
  handler: async (accessor) => {
    const { startRow, endRow } = getSelectRange(accessor)
    if (startRow === 0) return
    if (startRow !== endRow) return showMessage('请选择一个主体生成报告')
    
    return true
  }
}
export const addButtonOperation = {
  id: 'add',
  type: CommandType.OPERATION,
  handler: async (accessor) => {
    const univer = accessor.get(IUniverInstanceService)
    const sheet = univer.getCurrentUnitForType(UniverInstanceType.UNIVER_SHEET).getActiveSheet()
    const selection = sheet.getSelection()
    const range = selection.getActiveRange()
    console.log('range', range)
    alert('添加至XX分组')
    return true
  }
}
export const deleteButtonOperation = {
  id: 'delete',
  type: CommandType.OPERATION,
  handler: async (accessor) => {
    const univer = accessor.get(IUniverInstanceService)
    const sheet = univer.getCurrentUnitForType(UniverInstanceType.UNIVER_SHEET).getActiveSheet()
    const selection = sheet.getSelection()
    const range = selection.getActiveRange()
    console.log('range', range)
    alert('从分组删除')
    return true
  }
}
