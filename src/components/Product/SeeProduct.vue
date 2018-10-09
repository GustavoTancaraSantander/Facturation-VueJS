<template>
<div> 
    <div class="titlee">
    <span class="container">
      <br>
       Productos
      <br><br>
    </span>
    
  </div>
  <hr>

    <Row>
        
  <v-app id="inspire" :dark="mode">  
  <v-card class="card">
    <v-card-title>
        <v-switch class="ma-0" label="Modo oscuro" v-model="mode"></v-switch>
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
        <td class="">{{ props.item.nameProduct }}</td>
        <td class="">{{ props.item.brandProduct}}</td>
        <td class="">{{ props.item.category }}</td>
        <td class="">{{ props.item.price }}</td>
        <td class="">{{ props.item.quatity }}</td>
        <td class="">{{ props.item.providers.name }}</td>
        
       
        <td>
          <v-btn @click="editItem(props.item.id)" flat icon color="cyan darken-2">
          <v-icon>
            edit
          </v-icon>
            </v-btn>
          <v-btn  @click="deleteItem(props.item.id)" flat icon color="red lighten-1">
          <v-icon>
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
  name: "product",
  data() {
    return {
      data: [],
      mode: false,
      search: "",
      headers: [
        {
          text: "Nombre",
          value: "nameproduct"
        },
        { text: "Marca", value: "brandproduct" },
        { text: "Categoria", value: "category" },
        { text: "Precio", value: "price" },
        { text: "Cantidad", value: "quatity" },
        { text: "Proveedor", value: "providers" },
        { text: "Actions", value: "action", sortable: false }
      ]
    };
  },
  created() {
    let self = this;
    self.getAll();
  },
  methods: {
    deleteItem(index) {
      this.$Modal.confirm({
        title: "Eliminar",
        content: "Seguro que deseas eliminar este Producto?",
        loading: true,
        onOk: () => {
          setTimeout(() => {
            this.$Modal.remove();
            this.removeT(index);
            this.$Message.success("Product eliminado!");
          }, 500);
        }
      });
    },
    removeT(id) {
      let iam = this;
      iam.$store.state.services.ProductService.deleteT(id)
        .then(t => {
          iam.getAll();
        })
        .catch(t => {
          iam.$Message.error("Error!");
        });
    },
    editItem(id) {
       this.$router.push(`/product/${id}/edit`)
    },

    getAll() {
      let self = this;
      self.$store.state.services.ProductService.getAll()
        .then(t => {
          //t respuesta del servidor
          self.data = t.data;
        })
        .catch(r => {
          alert("error" + r);
        });
    }
  }
};
</script>
<style>
.titlee {
  font-weight: bolder;
  font-size: 18px;
  text-align: center;
  background-color: #424242;
  color: #f8f8f9;
}
</style>
