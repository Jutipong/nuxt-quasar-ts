<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);
const miniState = ref(true);
const $q = useQuasar();

function toggleLeftDrawer() {
	leftDrawerOpen.value = !leftDrawerOpen.value;
}

const logout = () => {
	navigateTo('/login');
};
</script>

<template>
	<q-layout view="hHh LpR fFf">
		<q-header elevated class="bg-primary text-white">
			<q-toolbar>
				<q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

				<q-toolbar-title>
					<q-avatar>
						<img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
					</q-avatar>
					Title
				</q-toolbar-title>

				<q-space />

				<q-btn
					class="hover:bg-red-600"
					align="around"
					:label="$q.screen.gt.sm ? 'Logout' : ''"
					flat
					icon="logout"
					@click="logout()"></q-btn>
			</q-toolbar>
		</q-header>

		<q-drawer
			show-if-above
			v-model="leftDrawerOpen"
			side="left"
			elevated
			:no-mini-animation="false"
			:mini="miniState"
			@mouseover="miniState = false"
			@mouseout="miniState = true">
			<!-- drawer content -->
		</q-drawer>

		<q-page-container>
			<!-- page content -->
			<slot></slot>
		</q-page-container>
	</q-layout>
</template>
