<template>
  <div class="upload-btn">
    <input id="uploadFile" type="file" name="uploadFile" v-on:change="fileChanged" />
    <label for="uploadFile" v-ripple :class="`v-btn ${classes}${color} upload-btn`">
      {{ icon ? '' : title }}
      <slot name="icon"></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "verify-upload-btn",
  props: {
    block: {
      default: false,
      type: Boolean
    },
    verifyfileChangedCallback: {
      default: undefined,
      type: Function
    },
    color: {
      default: "primary",
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    },
    flat: {
      default: false,
      type: Boolean
    },
    hover: {
      default: true,
      type: Boolean
    },
    icon: {
      default: false,
      type: Boolean
    },
    large: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    outline: {
      default: false,
      type: Boolean
    },
    ripple: {
      default: true,
      type: Boolean
    },
    round: {
      default: false,
      type: Boolean
    },
    small: {
      default: false,
      type: Boolean
    },
    title: {
      default: "Upload",
      type: String
    }
  },
  computed: {
    classes() {
      const classes = {
        "v-btn--block": this.block,
        "v-btn--flat": this.flat,
        "upload-btn-hover": this.hover,
        "v-btn--icon": this.icon,
        "v-btn--large": this.large,
        "v-btn--loading": this.loading,
        "v-btn--outline": this.outline,
        "v-btn--round": this.round,
        "v-btn--small": this.small,
        "v-btn--disabled": this.disabled
      };
      let classString = "";
      for (let key in classes) {
        if (classes[key]) {
          classString += `${key} `;
        }
      }
      return classString;
    }
  },
  methods: {
    verifyfileChanged(eve) {
      this.verifyfileChangedCallback(eve.target.files[0]);
    }
  }
};
</script>

<style scoped>
.upload-btn {
  padding-left: 16px;
  padding-right: 16px;
}
.upload-btn input[type="file"] {
  position: absolute;
  height: 0.1px;
  width: 0.1px;
  overflow: hidden;
  opacity: 0;
  z-index: -1;
}
.upload-btn-hover {
  cursor: pointer;
}
</style>