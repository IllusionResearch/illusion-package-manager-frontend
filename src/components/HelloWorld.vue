<script setup lang="ts">
import { ref } from "vue";
import { GameToken, useAddPackageMutation, usePackagesQuery, useEditPackageMutation } from "../generated/graphql";
import type { AddPackagePayloadInput } from "../generated/graphql";
import type { Item } from "../types/Item";

const newPayload = ref<AddPackagePayloadInput>({
  game: GameToken.None,
  pattern: "",
  repositoryOwner: "",
  repositoryName: "",
});

const packages = ref<Item[]>([]);

usePackagesQuery().onResult((param) => {
  packages.value.push(
    ...param.data.packages.map((e) => ({
      id: e.id,
      game: e.game,
      pattern: e.pattern,
      repositoryOwner: e.repositoryOwner,
      repositoryName: e.repositoryName,
    }))
  );
});

function add() {
  return useAddPackageMutation({ variables: { payload: newPayload.value } }).mutate();
}

function edit(payload: Item) {
  return useEditPackageMutation({ variables: { payload } }).mutate();
}
</script>

<template>
  <section class="block">
    <div class="content grid new-grid">
      <div class="header pattern">Pattern</div>
      <div class="header repo-owner">Repository owner</div>
      <div class="header repo-name">Repository name</div>

      <input class="value pattern" v-model="newPayload.pattern" placeholder="Pattern" />
      <input class="value repo-owner" v-model="newPayload.repositoryOwner" placeholder="Repository owner" />
      <input class="value repo-name" v-model="newPayload.repositoryName" placeholder="Repository name" />
    </div>
    <button @click.prevent="add">Add new</button>
  </section>

  <section class="block">
    <div class="grid">
      <div class="header id">Id</div>
      <div class="header pattern">Pattern</div>
      <div class="header repo-owner">Repository owner</div>
      <div class="header repo-name">Repository name</div>

      <div class="row" v-for="pack of packages" :key="pack.id">
        <input size="3" @blur="edit(pack)" class="value id" v-model="pack.id" readonly />
        <input @blur="edit(pack)" class="value pattern" v-model="pack.pattern" />
        <input @blur="edit(pack)" class="value repo-owner" v-model="pack.repositoryOwner" />
        <input @blur="edit(pack)" class="value repo-name" v-model="pack.repositoryName" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.block:not(:last-child) {
  margin-bottom: 40px;
}

.content {
  overflow: hidden;
  border: 1px solid #415a77;
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 20px;
}

button {
  color: inherit;
  border: 1px solid #415a77;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #415a77;
  padding: 20px;
  width: 100%;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #778da9;
  color: #0d1b2a;
}

.grid {
  display: grid;
  grid-template-columns: min-content auto min-content auto;
  gap: 10px 40px;
}

.new-grid {
  grid-template-columns: auto auto auto;
}

.header {
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 0;
}

.value {
  width: auto;
  padding: 10px;
  background-color: transparent;
  color: inherit;
  border: none;
  background-color: #1b263b;
  border-radius: 10px;
  outline: none;
}

.row {
  display: contents;
}

.value:not(:read-only):focus,
.value:not(:read-only):hover {
  outline: 1px solid #778da9;
}

.id {
  text-align: center;
}
</style>
