
const {
  Disposable,
  ICommandService,
  LifecycleStages,
  OnLifecycle,
  Inject,
  Injector
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} = (window as any).UniverCore
const {
  ComponentManager,
  ContextMenuGroup,
  ContextMenuPosition,
  IMenuManagerService,
  RibbonStartGroup
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} = (window as any).UniverUi

import { CustomMenuItemSingleButtonFactory, CustomMenuItemPxButtonFactory, CustomMenuItemReportButtonFactory, CustomMenuItemAddButtonFactory, CustomMenuItemDeleteButtonFactory } from './single-button.menu'
import { SingleButtonOperation, pxButtonOperation, reportButtonOperation, addButtonOperation, deleteButtonOperation } from '../commands/operations/single-button.operation'

const svg = (v) => v
const headerList = ['px']

const mergeMenuBefore = (list) => {
  const map = {
    [RibbonStartGroup.HISTORY]: {},
    [ContextMenuPosition.ROW_HEADER]: {
      [ContextMenuGroup.FORMAT]: {}
    },
    [ContextMenuPosition.MAIN_AREA]: {
      [ContextMenuGroup.FORMAT]: {}
    }
  }
  list.forEach((item, idx) => {
    if (item.s.id === '') return
    if (headerList.includes(item.s.id)) {
      map[RibbonStartGroup.HISTORY][item.s.id] = {
        order: idx + 1,
        menuItemFactory: item.c
      }
      return
    }
    map[ContextMenuPosition.ROW_HEADER][ContextMenuGroup.FORMAT][item.s.id] = {
      order: idx - 6,
      menuItemFactory: item.c
    }
    map[ContextMenuPosition.MAIN_AREA][ContextMenuGroup.FORMAT][item.s.id] = {
      order: idx - 6,
      menuItemFactory: item.c
    }
  })
  return map
}

const menuList = mergeMenuBefore([
  {
    s: SingleButtonOperation,
    c: CustomMenuItemSingleButtonFactory
  },
  {
    s: pxButtonOperation,
    c: CustomMenuItemPxButtonFactory
  },
  {
    s: reportButtonOperation,
    c: CustomMenuItemReportButtonFactory
  },
  {
    s: addButtonOperation,
    c: CustomMenuItemAddButtonFactory
  },
  {
    s: deleteButtonOperation,
    c: CustomMenuItemDeleteButtonFactory
  }
])


@OnLifecycle(LifecycleStages.Ready, CustomMenuController)
export class CustomMenuController extends Disposable {
  constructor(
    @Inject(Injector) private readonly _injector: Injector,
    @ICommandService private readonly _commandService: ICommandService,
    @IMenuManagerService
    private readonly _menuMangerService: IMenuManagerService,
    @Inject(ComponentManager)
    private readonly _componentManager: ComponentManager
  ) {
    super()

    this._initCommands()
    this._registerComponents()
    this._initMenus()
  }
  
  private _initCommands(): void {
    [
      SingleButtonOperation,
      pxButtonOperation,
      reportButtonOperation
    ].forEach((c) => this.disposeWithMe(this._commandService.registerCommand(c)))
  }

  private _registerComponents(): void {
    const componentManager = this._componentManager
    this.disposeWithMe(componentManager.register('fx', () => svg('📊')))
    this.disposeWithMe(componentManager.register('px', () => svg('🔽降序')))
    this.disposeWithMe(componentManager.register('report', () => svg('📋')))
    this.disposeWithMe(componentManager.register('add', () => svg('➕')))
    this.disposeWithMe(componentManager.register('delete', () => svg('🆑')))
  }

  private _initMenus(): void {
    this._menuMangerService.mergeMenu(menuList)
  }
}
