const {
    LocaleType,
    SheetTypes
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = (window as any).UniverCore

export const DEFAULT_WORKBOOK_DATA = {
    id: 'workbook-01',
    locale: LocaleType.ZH_CN,
    name: 'universheet',
    sheetOrder: ['sheet-01'],
    appVersion: '3.0.0-alpha',
    sheets: {
      'sheet-01': {
        type: SheetTypes.GRID,
        id: 'sheet-01',
        styles: {
          'header_style': {
            fs: 16,
            bg: {
              rgb: '#5B9BD5'
            }
          }
        },
        cellData: {
            '0': {
                '0': {
                    v: 'Hello World',
                },
            },
            '1': {
                '0': {
                    v: '你好',
                },
            },
        },
        name: 'sheet1',
        tabColor: '#ccc',
        hidden: 0,
        rowCount: 100, // 行数
        columnCount: 20, // 列数
        zoomRatio: 1,
        scrollTop: 0,
        scrollLeft: 0,
        defaultColumnWidth: 93,
        defaultRowHeight: 27,
        status: 1,
        showGridlines: 1,
        hideRow: [],
        hideColumn: [],
        rowHeader: {
          width: 46,
          hidden: 0
        },
        columnHeader: {
          height: 20,
          hidden: 0
        },
        selections: [],
        rightToLeft: 0,
        pluginMeta: {}
      }
    }
};
