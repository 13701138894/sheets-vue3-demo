// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { CommandType, IUniverInstanceService, UniverInstanceType } = (window as any).UniverCore

export const SingleButtonOperation = {
  id: 'fx',
  type: CommandType.OPERATION,
  handler: async (accessor) => {
    const univer = accessor.get(IUniverInstanceService)
    const sheet = univer.getCurrentUnitForType(UniverInstanceType.UNIVER_SHEET).getActiveSheet()
    const selection = sheet.getSelection()
    const range = selection.getActiveRange()
    console.log('range', range)
    alert('分析')
    return true
  }
}
export const pxButtonOperation = {
  id: 'px',
  type: CommandType.OPERATION,
  handler: async (accessor) => {
    const univer = accessor.get(IUniverInstanceService)
    const sheet = univer.getCurrentUnitForType(UniverInstanceType.UNIVER_SHEET).getActiveSheet()
    const selection = sheet.getSelection()
    const range = selection.getActiveRange()
    console.log('range', range)
    alert('降序')
    return true
  }
}
export const reportButtonOperation = {
  id: 'report',
  type: CommandType.OPERATION,
  handler: async (accessor) => {
    const univer = accessor.get(IUniverInstanceService)
    const sheet = univer.getCurrentUnitForType(UniverInstanceType.UNIVER_SHEET).getActiveSheet()
    const selection = sheet.getSelection()
    const range = selection.getActiveRange()
    console.log('range', range)
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