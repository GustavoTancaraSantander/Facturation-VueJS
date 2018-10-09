<template>
<div>
   <div class="titlee">
    <span class="container">
      <br> Home <br><br>
    </span>
  </div>
  <hr>
<div class="container">
 
    
        <Row>
         <Col span="12" >
           <!-- <div :style="{margin: '20px', padding: '2%'}"> -->
              <Card style="width:95%; height: 300px " >
              <div style="text-align:center">
                <h3 slot="title">Clientes</h3>
                <img src="@/assets/client1.png" width="128" height="128">
                 <div>
                  <v-flex xs12 sm3>
                   <v-btn flat icon color="cyan lighten-3" @click="redirect('/client/see')" fab large dark>
                    <v-icon>fa-eye</v-icon>
                  </v-btn>
                </v-flex>
              </div>
              </div>
          </Card>
          <br>
            <Card style="width:95%; height: 300px "  @click="redirect('/employee/see')">
              <div style="text-align:center">
                <h3 slot="title">Empleados</h3>
                <img src="@/assets/employee1.png" width="128" height="128">
                 <div>
                  <v-flex xs12 sm3>
                   <v-btn flat icon color="cyan lighten-3" @click="redirect('/employee/see')" fab large dark>
                    <v-icon>fa-eye</v-icon>
                  </v-btn>
                </v-flex>
              </div>
            </div>
          </Card>
        
          <!-- </div> -->
        </Col>
        <Col span="12" >
      <!-- <div :style="{margin: '20px', padding: '2%'}"> -->
        
              <Card style="width:100%; height: 300px;  ">
              <div style="text-align:center">
                <h3 slot="title">Productos</h3>
                <img src="@/assets/product1.png" width="128" height="128">
                 <div>
                  <v-flex xs12 sm3>
                   <v-btn flat icon color="indigo darken-4" @click="redirect('/product/see')" fab large dark>
                    <v-icon>fa-eye</v-icon>
                  </v-btn>
                </v-flex>
              </div>
              </div>
          </Card>
        </Card><br>
            <Card style="width:100%; height: 300px ">
              <div style="text-align:center">
                <h3 slot="title">Proveedores</h3>
                <img src="@/assets/provider.png" width="128" height="128"><br>
                <div>
                  <v-flex xs12 sm3>
                   <v-btn flat icon color="amber accent-3" @click="redirect('/provider/see')" fab large dark>
                    <v-icon>fa-eye</v-icon>
                  </v-btn>
                </v-flex>
              </div>
              </div>
          </Card>
          <!-- </div> -->
         </Col>
       
         </Row>
         </div>
    

  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      mode: false,
      isCollapsed: false
    };
  },
  methods: {
    redirect(path) {
      if (path === undefined) return;
      this.$router.push(path);
    }
  }
};
</script>
<style>
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
