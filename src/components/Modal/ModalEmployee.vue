<template>
    <div>
         <Button @click="modal = true">Buscar</Button>
    <Modal
        title="Empleados"
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
          title: "Cedula",
          key: "dni"
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
                      this.showemployee(params.index);
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
      self.$store.state.services.UserService
        .getAll()
        .then(t => {
          //t respuesta del servidor
          self.data = t.data;
        })
        .catch(r => {
          alert('error'+  r)
        });
    },
    showemployee(index){
        this.$emit('getEmployee',this.data[index].id, this.data[index].name,this.data[index].lastName)
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
