<template>
<div>
<div class="titlee">
    <span class="container">
      <br>
       Proveedores
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
    
      <template slot="items" slot-scope="props">
        <td class="hover">{{ props.item.name }}</td>
        <td class="hover">{{ props.item.lastName }}</td>
        <td class="hover">{{ props.item.address }}</td>
        <td class="hover">{{ props.item.email }}</td>
        <td class="hover">{{ props.item.dni }}</td>
        <td class="hover">{{ props.item.telephone }}</td>
        <td class="hover">{{ props.item.nameCompany }}</td>
        <td>
             <v-btn flat icon color="cyan darken-2"  @click="editItem(props.item.id)">
          <v-icon>
            edit
          </v-icon>
          </v-btn>
          <v-btn flat icon color="red lighten-1" @click="deleteItem(props.item.id)">
          <v-icon >
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
  name: "provider",
  data() {
    return {
      mode: false,
      search: "",
      headers: [
        { text: "Nombre", align: "left", value: "name" },
        { text: "Apellido", value: "lastname" },
        { text: "Direccion", value: "address" },
        { text: "Email", value: "email" },
        { text: "Cedula", value: "dni" },
        { text: "Telefono", value: "telephone" },
        { text: "Compañia", value: "company" },
        { text: "Actions", value: "action", sortable: false }
      ],
      data: []
    };
  },
  created() {
    let self = this;
    self.getAll();
  },
  methods: {
    deleteItem(index) {
    
      this.$Modal.confirm({
            title: 'Eliminar',
            content: "Seguro que deseas eliminar este proveedor",
            loading: true,
            onOk: () => {
                setTimeout(() => {
                    this.$Modal.remove();
                    this.removeT(index);
                    this.$Message.success('Proveedor eliminado!');
                }, 1000);
            }
        });
      
    },
    removeT(id){
      let iam = this;
      iam.$store.state.services.ProviderService.deleteP(id)
      .then(t =>{
        iam.getAll();
      }).catch(t =>{
        iam.$Message.error("Error!");
      })
    },
    editItem(id) {
      this.$router.push(`/provider/${id}/edit`)
    },

    getAll() {
      let self = this;
      self.$store.state.services.ProviderService.getAll()
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
.card {
  padding: 2%;
  background: #f8f8f9;
}
.titlee {
  font-weight: bolder;
  font-size: 18px;
  text-align: center;
  background-color: #424242;
  color: #f8f8f9;
}
</style>


