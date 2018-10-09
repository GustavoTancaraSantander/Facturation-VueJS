<template>
<div> 
    <div class="titlee">
    <span class="container">
      <br>
       Ventas
      <br><br>
    </span>
    
  </div>
  <hr>

    <Row>
    <div>
    
    </div> 
  <v-app id="inspire" :dark="mode">  
  <v-card class="card">
    <v-switch class="ma-0" label="Modo oscuro" v-model="mode"></v-switch>
    <v-card-title>
      
      <v-spacer></v-spacer>
      <v-text-field class="input"
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
        
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="data"
      :search="search"
   
      class="table"
    >
    
      <template slot="items" slot-scope="props" >
        <td class="">{{ props.item.code }}</td>
        <td class="">{{ props.item.client }}</td>
        <td class="">{{ props.item.date }}</td> 
        <td class="">{{ props.item.article }}</td>
        <td class="">{{ props.item.totalPrice }}</td>
       
        <td>
          <v-btn flat icon color="cyan darken-2">
          <v-icon
           
            @click="editItem(props.item)"
          >
           fa-eye
          </v-icon>
          </v-btn>
          <v-btn flat icon color="red lighten-1">
          <v-icon
             
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
          </v-btn>
        </td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
       Tu busqueda para "{{ search }}" no fue encontrada.
      </v-alert>
    </v-data-table>
  </v-card>
      </v-app>
  </Row>

  </div>
</template>
<script>
export default {
  code: "employee",
  data() {
    return {
      mode: false,
      search: "",
      headers: [
 
        { text: "Cliente", value: "client" },
        { text: "Empleado", value: "user" },
        { text: "Articulo", value: "article" },
        { text: "Precio Total", value: "totalPrice" },
        { text: "Actions", value: "action", sortable: false }
      ],
      data:[]
    };
  },
  created() {
    let self = this;
    self.getAll();
  },
  methods: {
     deleteItem (item) {
        const index = this.data.indexOf(item)
        confirm('Estas seguro de que quiere eliminar este Product?') && this.data.splice(index, 1)
      },
      editItem (item) {
        this.editedIndex = this.data.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
    
    get() {
      let self = this;
      self.$store.state.service.BuyService
        .getAll()
        .then(t => {
          //t respuesta del servidor
          self.data = t.data;
        })
        .catch(r => {});
    }
  }
};
</script>
<style>
.titlee{
  font-weight: bolder;
 font-size: 18px;
 text-align: center;
 background-color: #424242;
 color: #f8f8f9;
}
</style>

