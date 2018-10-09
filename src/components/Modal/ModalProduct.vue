<template>
    <div>
         <Button @click="modal = true">Buscar</Button>
    <Modal
        title="Productos"
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
          key: "nameProduct",
          classnameProduct: 'demo-table-info-column',
          render: (h, params) => {
            return h("div", [
              h("strong", params.row.nameProduct)
            ]);
          }
        },
         {
          title: "Marca",
          key: "brandProduct",
          
        },
        {
          title: "Precio",
          key: "price",
          
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
                      this.showproduct(params.index);
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
      self.$store.state.services.ProductService.getAll()
        .then(t => {
          //t respuesta del servidor
          self.data = t.data;
        })
        .catch(r => {
          alert("error" + r);
        });
    },
    showproduct(index){
        this.$emit('getProduct',
        this.data[index].id, 
        this.data[index].nameProduct,
        this.data[index].price,
        this.data[index].brandProduct,
        this.data[index].quatity)
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
