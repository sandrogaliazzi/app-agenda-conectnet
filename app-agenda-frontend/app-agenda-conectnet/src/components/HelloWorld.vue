<script setup>
import { onMounted } from "vue";
import db from "@/firebase";

import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const compromissos = async () => {
  try {
    const compromissos = [];
    const collectionRef = collection(db, "compromissos");
    const documents = await getDocs(collectionRef);
    documents.forEach((doc) => {
      compromissos.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return compromissos;
  } catch (err) {
    throw err.message;
  }
};

onMounted(async () => {
  console.log(await compromissos());
});
</script>
<template>
  <v-container class="fill-height">
    <v-responsive class="align-centerfill-height mx-auto" max-width="900">
      <v-row>
        <v-col cols="12">
          <v-card title="hello world vue teste"></v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
