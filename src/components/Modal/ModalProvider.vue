<template>
    <div>
         <Button @click="modal = true">Buscar</Button>
    <Modal
        title="Proveedores"
        v-model="modal"
        :mask-closable="false">
        <Table border :columns="columns" :data="data"></Table>
    </Modal>
    </div>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      columns: [
        {
          title: "Nombre",
          key: "name",
          className: 'demo-table-info-column',
          render: (h, params) => {
            return h("div", [
              h("strong", params.row.name)
            ]);
          }
        },
        {
          title: "Apellido",
          key: "lastName",
          
        },
        {
          title: "Compañia",
          key: "nameCompany"
        },
        {
          title: "Seleccionar",
          key: "action",
          width: 150,
          align: "center",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                     this.modal = false
                      this.showprovider(params.index);
                    }
                  }
                },
                "Agregar"
              )
            ]);
          }
        }
      ],
      data: []
    };
  },
  created() {
    let self = this;
    self.getAll();
  },
  methods: {
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
    },
    showprovider(index){
        this.$emit('getProvider',this.data[index].id, this.data[index].name,this.data[index].lastName)
    },
  }
};
</script>

<style>
 .ivu-table td.demo-table-info-column{
        background-color: #ff6600;
        color: #fff;
    }
</style>
