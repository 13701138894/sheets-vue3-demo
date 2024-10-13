// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { LocaleService, Plugin, Inject, Injector, UniverInstanceType } = (window as any).UniverCore


import { CustomMenuController } from './controllers/custom-menu.controller'

const SHEET_CUSTOM_MENU_PLUGIN = 'SHEET_CUSTOM_MENU_PLUGIN'

export class UniverSheetsCustomMenuPlugin extends Plugin {
  static override type = UniverInstanceType.UNIVER_SHEET
  static override pluginName = SHEET_CUSTOM_MENU_PLUGIN

  constructor(
    @Inject(Injector) protected readonly _injector: Injector,
    @Inject(LocaleService) private readonly _localeService: LocaleService
  ) {
    super()
  }

  override onStarting(injector): void {
    [
      [CustomMenuController]
    ].forEach((d) => injector.add(d))
  }
}
