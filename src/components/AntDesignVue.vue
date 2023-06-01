<template>
  <div
    class="w-full h-full bg-white p-2 flex flex-col justify-around items-center"
  >
    <div class="text-4xl text-white font-bold">Ant design vue</div>

    <div class="flex gap-2">
      <a-button type="primary" danger>Primary</a-button>
      <a-button danger>Default</a-button>
      <a-button type="dashed" danger>Dashed</a-button>
      <a-button type="text" danger>Text</a-button>
      <a-button type="link" danger>Link</a-button>
    </div>
    <div>
      <a-typography-paragraph v-model:content="editableStr" editable />
      <a-typography-paragraph v-model:content="customIconStr" editable>
        <template #editableIcon><HighlightOutlined /></template>
        <template #editableTooltip>click to edit text</template>
      </a-typography-paragraph>
      Trigger edit with:&nbsp;&nbsp;
      <a-radio-group
        :value="stateToRadio()"
        @change="(e) => (chooseTrigger = radioToState(e.target.value))"
      >
        <a-radio value="icon">icon</a-radio>
        <a-radio value="text">text</a-radio>
        <a-radio value="both">both</a-radio>
      </a-radio-group>
      <a-typography-paragraph
        v-model:content="clickTriggerStr"
        :editable="{ triggerType: chooseTrigger }"
      >
        <template #editableTooltip>click to edit text</template>
      </a-typography-paragraph>
      <a-typography-paragraph v-model:content="customEnterIconStr" editable>
        <template #editableIcon><HighlightOutlined /></template>
        <template #editableTooltip>click to edit text</template>
        <template #editableEnterIcon="{ className }">
          <CheckOutlined :class="className" />
        </template>
      </a-typography-paragraph>
      <a-typography-paragraph v-model:content="noEnterIconStr" editable>
        <template #editableIcon><HighlightOutlined /></template>
        <template #editableTooltip>click to edit text</template>
        <template #editableEnterIcon>{{ null }}</template>
      </a-typography-paragraph>
      <a-typography-paragraph
        v-model:content="hideTooltipStr"
        :editable="{ tooltip: false }"
      />
      <a-typography-paragraph
        v-model:content="lengthLimitedStr"
        :editable="{ maxlength: 50, autoSize: { maxRows: 5, minRows: 3 } }"
      />

      <a-typography-paragraph copyable
        >This is a copyable text.</a-typography-paragraph
      >
      <a-typography-paragraph :copyable="{ text: 'Hello, Ant Design!' }">
        Replace copy text.
      </a-typography-paragraph>
      <a-typography-paragraph
        copyable
        content="Custom Copy icon and replace tooltips text."
      >
        <template #copyableIcon="{ copied }">
          <SmileOutlined v-if="!copied" key="copy-icon" />
          <SmileFilled v-else key="copied-icon" />
        </template>
        <template #copyableTooltip="{ copied }">
          <span v-if="!copied" key="copy-tooltip">click here</span>
          <span v-else key="copied-tooltip">you clicked!!</span>
        </template>
      </a-typography-paragraph>
      <a-typography-paragraph :copyable="{ tooltip: false }">
        Hide Copy tooltips.
      </a-typography-paragraph>
    </div>
    <div>
      <a-tree
        v-model:expandedKeys="expandedKeys"
        v-model:selectedKeys="selectedKeys"
        v-model:checkedKeys="checkedKeys"
        checkable
        :tree-data="treeData"
      >
        <template #title="{ title, key }">
          <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{
            title
          }}</span>
          <template v-else>{{ title }}</template>
        </template>
      </a-tree>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import {
  HighlightOutlined,
  SmileOutlined,
  SmileFilled,
  CheckOutlined,
} from "@ant-design/icons-vue";
const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
            disableCheckbox: true,
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            key: "0-0-1-0",
            title: "sss",
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  components: {
    HighlightOutlined,
    SmileOutlined,
    SmileFilled,
    CheckOutlined,
  },
  setup() {
    const editableStr = ref("This is an editable text.");
    const expandedKeys = ref(["0-0-0", "0-0-1"]);
    const selectedKeys = ref(["0-0-0", "0-0-1"]);
    const checkedKeys = ref(["0-0-0", "0-0-1"]);
    watch(editableStr, () => {
      console.log("editableStr", editableStr.value);
    });
    watch(expandedKeys, () => {
      console.log("expandedKeys", expandedKeys);
    });
    watch(selectedKeys, () => {
      console.log("selectedKeys", selectedKeys);
    });
    watch(checkedKeys, () => {
      console.log("checkedKeys", checkedKeys);
    });
    const chooseTrigger = ref(["icon"]);
    const radioToState = (input) => {
      switch (input) {
        case "text":
          return ["text"];
        case "both":
          return ["icon", "text"];
        case "icon":
        default:
          return ["icon"];
      }
    };
    const stateToRadio = () => {
      if (chooseTrigger.value.indexOf("text") !== -1) {
        return chooseTrigger.value.indexOf("icon") !== -1 ? "both" : "text";
      }
      return "icon";
    };
    return {
      treeData,
      expandedKeys,
      selectedKeys,
      checkedKeys,
      radioToState,
      stateToRadio,
      editableStr,
      customIconStr: ref("Custom Edit icon and replace tooltip text."),
      hideTooltipStr: ref("Hide Edit tooltip."),
      lengthLimitedStr: ref("This is an editable text with limited length."),
      clickTriggerStr: ref("Text or icon as trigger - click to start editing."),
      chooseTrigger,
      customEnterIconStr: ref(
        "Editable text with a custom enter icon in edit field."
      ),
      noEnterIconStr: ref("Editable text with no enter icon in edit field."),
    };
  },
});
</script>

<style scoped></style>
