<template>
<div>
        <v-list three-line>
      <template v-for="(item, index) in Object.keys(items)">
        <v-subheader
          :key="index"
          v-text="formatHeader(item)"
        ></v-subheader>
        <template v-for="item in items[item] ">
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
           
      </template>
    </v-list>
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