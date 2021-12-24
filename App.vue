<template>
  <v-app id="app">
    <app-nav-drawer />
    <app-toolbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer />
    <app-right-drawer />
  </v-app>
</template>

<script>
import AppFooter from '../components/layout/Footer.vue'
import AppNavDrawer from '../components/layout/NavDrawer.vue'
import AppRightDrawer from '../components/layout/RightDrawer.vue'
import AppToolbar from '../components/layout/Toolbar.vue'

export default {
  name: 'app',
  components: {
    AppFooter,
    AppNavDrawer,
    AppRightDrawer,
    AppToolbar
  }
}
</script>

<style lang="stylus">
:root {
  --scp-base-unit: 8px;
  --scp-base-unit--half: calc(var(--scp-base-unit) * 0.5);
  --scp-base-unit--2: calc(var(--scp-base-unit) * 2);
  --scp-base-unit--3: calc(var(--scp-base-unit) * 3);
  --scp-base-unit--4: calc(var(--scp-base-unit) * 4);
  --scp-base-unit--5: calc(var(--scp-base-unit) * 5);
  --scp-bg-colour--subtle: rgba(25, 51, 102, 0.08);
  --scp-bg-colour--subtler: rgba(25, 51, 102, 0.04);
  --scp-border-colour: rgba(0, 0, 0, 0.08);
  --scp-text-colour--subtle: #333;
  --scp-text-colour--subtler: #666;
}

html, .application {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 1.3em;
}

.theme--light.application {
  background-color: #e5ecef;
}

iframe[id^='sb__open-sandbox'] {
  display: none;
}

.border-bottom {
  border-bottom: 1px solid var(--scp-border-colour);
}

.icon--expanded {
  transform: rotate(-180deg);
}

section.v-card {
  .v-card__title {
    background-color: var(--scp-bg-colour--subtler);
    border-bottom: 1px solid var(--scp-border-colour);
    justify-content: space-between;
    padding: var(--scp-base-unit) var(--scp-base-unit) var(--scp-base-unit) var(--scp-base-unit--2);

    .col__left {
      align-items: center;
      color: var(--scp-text-colour--subtle);
      display: flex;
      font-size: 1.2em;
      font-weight: 600;
      text-transform: uppercase;

      .count {
        color: var(--scp-text-colour--subtler);
        font-weight: 400;
        margin-left: var(--scp-base-unit);
      }

      .v-icon {
        margin-right: var(--scp-base-unit);
      }
    }

    .col__right {
      display: flex;

      .v-btn {
        margin: 0 var(--scp-base-unit--half) 0 0;
      }

      .v-btn:last-of-type {
        margin-right: 0;
      }
    }
  }
}

.v-btn {
  border-radius: var(--scp-base-unit--half);
  box-shadow: initial !important;
}

.v-tabs {
  .v-btn.v-btn--icon {
    margin-right: var(--scp-base-unit);
  }
}
</style>
