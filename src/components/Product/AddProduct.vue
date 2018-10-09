<template>
<div >
  <div class="titlee">
    <span class="container">
      <br>
     {{addTitle }}
      <br><br>
    </span>
    
  </div>
  <hr>
  <div class="margin">
 
    <Form class="container" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <Row>
         <Col span="12">
          <div :style="{margin: '20px', padding: '2%',font: 'bold'}">
        <FormItem  prop="nameProduct">
          <label for="">Producto:</label>
            <Input v-model="formValidate.nameProduct"  clearable size="large"></Input>
        </FormItem>
        <FormItem  prop="brandProduct">
          <label for="">Marca:</label>
            <Input prefix="ios-checkmark" v-model="formValidate.brandProduct"  clearable size="large"></Input>
        </FormItem>
         <FormItem  prop="category">
           <label for="">Categoria:</label>
            <Input type="text" v-model="formValidate.category"  clearable size="large"></Input>
        </FormItem>
       
         </div>
        </Col>
        <Col span="12" >
        <div :style="{margin: '20px', padding: '2%'}">
        <FormItem  prop="price">
          <label for="">Precio:</label>
            <Input v-model="formValidate.price"  clearable size="large"></Input>
        </FormItem>
         <FormItem  prop="provider">
           <label>Proveedor:</label><br>
           <Input  disabled v-model="formValidate.provider" size="large" :style="{width: '30%'}"></Input>

           <modal-provider @getProvider="showProvider"></modal-provider>
        </FormItem>
         <FormItem  prop="quatity">
           <label for="">Cantidad:</label><br>
             <Input v-model="formValidate.quatity"  clearable size="large" :style="{width:'30%'}" ></Input>
        </FormItem>
      
        </div>
         </Col>
       
         </Row>
         <Row>
           <Col span="6" offset="10">
             <FormItem>
            <Button type="success" size="large" @click="handleSubmit('formValidate')" class="space">Enviar</Button>
            <br> <Button  @click="handleReset('formValidate')"size="large" class="space">Limpiar</Button>
           </FormItem>
           </Col>
           
         </Row>
    </Form>
    
    </div>
   </div>
</template>
<script>
import modalProvider from "../Modal/ModalProvider";
export default {
  components: {
    modalProvider
  },
  data() {
    return {
      formValidate: {
        id: 0,
        idProvider: 0,
        nameProduct: null,
        category: null,
        brandProduct: null,
        price: null,
        quatity: null,
        provider: null
      },

      ruleValidate: {
        provider: [
          {
            required: true,
            message: "Campo vacio!",
            trigger: "blur"
          }
        ],
        nameProduct: [
          {
            required: true,
            message: "Campo vacio!",
            trigger: "blur"
          }
        ],
        brandProduct: [
          {
            required: true,
            message: "Campo vacio!",
            trigger: "blur"
          }
        ],
        category: [
          {
            required: true,
            message: "Campo vacio!",
            trigger: "blur"
          }
        ],

        
      }
    };
  },
  computed: {
    addTitle() {
      let iam = this;
      return iam.formValidate.id === 0 ? "Agregar Producto" : "Editar Producto";
    }
  },
  created() {
    let iam = this;
    iam.get(iam.$route.params.id);
  },
  methods: {
    showProvider: function(value, value2, value3) {
      this.formValidate.provider = value2;
      this.formValidate.idProvider = value;
    },
    get(id) {
      if (id == undefined) {
        return;
      }
      let iam = this;
      iam.$store.state.services.ProductService.get(id)
        .then(t => {
          iam.formValidate.id = t.data.id;
          iam.formValidate.idProvider = t.data.idProvider;
          iam.formValidate.quatity = t.data.quatity;
          iam.formValidate.price = t.data.price;
          iam.formValidate.brandProduct = t.data.brandProduct;
          iam.formValidate.nameProduct = t.data.nameProduct;
          iam.formValidate.provider = t.data.provider;
          iam.formValidate.category = t.data.category
        })
        .catch(t => {
          iam.$Message.error("Error!");
        });
    },
    handleSubmit() {
      let iam = this;
      iam.$refs["formValidate"].validate(valid => {
        if (valid) {
          if (iam.formValidate.id > 0) {
            iam.$store.state.services.ProductService.updateT(iam.formValidate)
              .then(r => {
                iam.$Message.success("Editado correctamente!");
                iam.$router.push("/product/see");
              })
              .catch(r => {
                iam.$Message.error("Error al editar!");
              });
          } else {
            iam.$store.state.services.ProductService.add(iam.formValidate)
              .then(r => {
                iam.$Message.success("Agregado correctamente!");
                iam.$router.push("/product/see");
              })
              .catch(r => {
                iam.$Message.error("Error al agregar!");
              });
          }
        } else {
          iam.$Message.error("Error!");
        }
      });
    },
    handleReset(formValidate) {
      let iam = this;
      iam.$refs[formValidate].resetFields();
    }
  }
};
</script>
<style>
/* form {
  border-radius: 5px;
  background-color: #f8f8f9;
  padding: 20px;
  box-shadow: 0 1.5px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 4px 0 rgba(0, 0, 0, 0.19);
} */
label {
  font-weight: bolder;
}

.margin {
  margin-top: 2%;
}
hr {
  color: #e8eaec;
}
.space {
  width: 50%;
  margin-top: 2%;
}
.titlee {
  font-weight: bolder;
  font-size: 18px;
  text-align: center;
  background-color: #424242;
  color: #f8f8f9;
}
</style>

