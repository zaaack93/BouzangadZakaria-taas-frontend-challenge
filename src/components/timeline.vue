<template>
<div>
    <v-virtual-scroll
      :items="Object.keys(items)"
      :item-height="300"
      height="400"
      
    >
    <template v-slot:default="{ item }">
        <v-list three-line>
      
        <v-subheader
          :key="index"
          v-text="formatHeader(item)"
        ></v-subheader>
        <template v-for="item in items[item] " >
        <v-list-item
          :key="item"
        >
          <v-list-item-avatar>
            <v-img :src="item.author.avatar_url"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title ><b>{{item.author.login}}</b></v-list-item-title>
            <v-list-item-subtitle><b>{{item.commit.message}}</b><span class="ml-2">{{formathour(item.commit.committer.date)}}</span></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </template>
           <v-divider
            inset="true"
             :key="item.header"
        ></v-divider>
        </v-list>
      </template>
    
    </v-virtual-scroll>
</div>

</template>

<script>
import dateFormat from 'dateformat'
export default {
    props:{
    items:{
    type:Object
    }
},
    data(){
        return {
            index:0
        }
    },
    methods:{
        formatHeader(date){
            var now = new Date(date);
            return "Commits on "+  dateFormat(now, "mmm dd,  yyyy");
        },
        formathour(date){
            var now = new Date(date);
            return "Committed at "+  dateFormat(now, "HH:MM");
        }
    }

}
</script>

<style>

</style>