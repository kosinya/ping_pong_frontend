<script>
import Listbox from "primevue/listbox";
import Button from "primevue/button";
import CreateNewLeague from "./CreateNewLaegue.vue";
import LeagueDelete from "./LeagueDelete.vue";

export default {
  data() {
    return {
      selectedLeague: null,
    }
  },
  components: {
    Listbox,
    Button,
    CreateNewLeague,
    LeagueDelete,
  },
  computed: {
    allLeagues() {
      return this.$store.getters.GET_LEAGUES;
    },
    currentTournament() {
      return this.$store.getters['tournamentList/currentTournamentId'];
    }
  },
  methods: {
    onRowSelected() {
      this.$store.dispatch('set_current_league', this.selectedLeague);
    }
  },
  watch: {
    currentTournament(value) {
      this.selectedLeague = null;
      this.$store.dispatch('set_current_league', null);
    }
  }
}
</script>

<template>
  <div class="flex flex-column justify-content-start align-items-start">
    <div class="flex flex-column ml-3 p-3 border-gray-100 border-round-xl bg-gray-100">
      <label class="text-xl font-semibold mb-2">Лиги</label>
      <Listbox v-model="selectedLeague" :options="allLeagues" optionLabel="name" empty-message="Лиг не найдено"
               @change="onRowSelected" class="w-full md:w-fit border-none"
               listStyle="max-height:100%; min-width: 250px; max-width: 250px;">
      </Listbox>

      <div class="flex flex-row flex-wrap mt-3">
        <div class="flex align-items-center justify-content-center mr-2">
          <CreateNewLeague/>
        </div>
        <div class="flex align-items-center justify-content-center mr-2">
          <LeagueDelete/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>