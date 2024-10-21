<template>
  <div
    id="container"
    class="RenderExcel"
  >
  </div> 
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, toRaw } from 'vue'
import '../assets/univer.css'
import { UniverSheetsCustomMenuPlugin } from './plugin'

const univerRef = ref()
const workbook = ref()
const dataHeader = ref<string[]>([])
let univerAPI

const { data } = defineProps({
  // workbook data
  data: {
    type: Object,
    default: () => ({}),
  },
});

const { 
  UniverFacade,
  UniverCore, 
  UniverDesign, 
  UniverUMD, 
  UniverEngineRender, 
  UniverEngineFormula, 
  UniverUi, 
  UniverDocs, 
  UniverDocsUi, 
  UniverSheets,
  UniverSheetsUi,
  UniverSheetsFormula,
  UniverSheetsNumfmt,
  UniverSheetsFilter,
  UniverSheetsFilterUi,
  UniverSheetsSort,
  UniverSheetsSortUi,
  UniverFindReplace,
  UniverSheetsFindReplace,
  UniverEnginePivot,
  UniverSheetsPivotUi
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}  = window as any


onMounted(() => {
  init(data);
});

const init = (data) => {
  const univer = new UniverCore.Univer({
    theme: UniverDesign.defaultTheme,
    locale: UniverCore.LocaleType.ZH_CN,
    locales: {
      [UniverCore.LocaleType.ZH_CN]: UniverUMD['zh-CN']
    }
  })
  univerRef.value = univer
  
  univer.registerPlugin(UniverEngineRender.UniverRenderEnginePlugin)
  univer.registerPlugin(UniverEngineFormula.UniverFormulaEnginePlugin)
  univer.registerPlugin(UniverUi.UniverUIPlugin, {
    container: 'container'
  })
  univer.registerPlugin(UniverDocs.UniverDocsPlugin, {
    hasScroll: false
  })
  univer.registerPlugin(UniverDocsUi.UniverDocsUIPlugin)

  univer.registerPlugin(UniverSheets.UniverSheetsPlugin)
  univer.registerPlugin(UniverSheetsUi.UniverSheetsUIPlugin)
  univer.registerPlugin(UniverSheetsFormula.UniverSheetsFormulaPlugin)
  univer.registerPlugin(UniverSheetsNumfmt.UniverSheetsNumfmtPlugin)
  univer.registerPlugin(UniverSheetsFilter.UniverSheetsFilterPlugin)
  univer.registerPlugin(UniverSheetsFilterUi.UniverSheetsFilterUIPlugin)
  univer.registerPlugin(UniverSheetsSort.UniverSheetsSortPlugin)
  univer.registerPlugin(UniverSheetsSortUi.UniverSheetsSortUIPlugin)
  univer.registerPlugin(UniverFindReplace.UniverFindReplacePlugin)
  univer.registerPlugin(UniverSheetsFindReplace.UniverSheetsFindReplacePlugin)
  univer.registerPlugin(UniverEnginePivot.UniverSheetsPivotTablePlugin)
  univer.registerPlugin(UniverSheetsPivotUi.UniverSheetsPivotTableUIPlugin)
  univer.registerPlugin(UniverSheetsCustomMenuPlugin)
  // toRaw(univerRef.value).registerPlugin(UniverSheetsUi.UniverSheetsUIPlugin, {
  //   menu: {
  //     'report': {
  //       hidden: true
  //     }
  //   }
  // })
  univerAPI = UniverFacade.FUniver.newAPI(univer)
  workbook.value = univerRef.value?.createUnit(UniverCore.UniverInstanceType.UNIVER_SHEET, data)
}

const destroyUniver = () => {
  toRaw(univerRef.value)?.dispose()
  univerRef.value = null
  workbook.value = null
}

onBeforeUnmount(() => {
  destroyUniver();
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.RenderExcel {
  width: 100%;
  height: 100%;
  border: 1px solid #cdcdcd;
  overflow: hidden;
}
</style>
