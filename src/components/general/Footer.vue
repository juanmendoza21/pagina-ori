<template>
  <div>
    <footer>
      <div class="barra-color"/>
      <div id="seccionSuperiorFooter" class="bg-light">
        <b-container>
          <b-row>
            <b-col md="4" align-self="center" class="mt-2 d-none d-sm-block">
              <div class="text-center">
                <img class="img-fluid" src="@/assets/img/footer/logo_dark.png">
              </div>
            </b-col>
            <b-col md="7" class="text-center mt-2">
              <p>
                <small>
                  <strong>Santa Fe:</strong> Tucumán 2748 - S3000CAJ - Tel: 0342-452-1203
                  <br>
                  <strong>Rosario:</strong> Boulevard Oroño 482 - S2000DSR - Tel: 0341-527-7600
                  <br>
                  <ins>Horario de atención al público</ins>: Lunes a Viernes de 7.30 a 13.30 hs.
                  <br>
                  <ins>Linea gratuita</ins>: 0800-444-2252 - De 8.00 a 13.00 hs.
                  <br>
                  <ins>Correo</ins>:
                  <a
                    href="mailto:secretariaprivada@cajadeprevisionsf.org.ar"
                  >secretariaprivada@cajadeprevisionsf.org.ar</a>
                </small>
              </p>
            </b-col>
            <b-col md="1" align-self="center" class="mt-2 d-none d-sm-block">
              <div class="text-center">
                <img class="img-fluid" src="@/assets/img/footer/escudo.png">
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="barra-color"/>
      <div id="seccionInferiorFooter">
          <b-container>
              <b-row>
                  <b-col class="text-center">
                      {{ new Date().getFullYear() }} - CAJA DE PREVISIÓN SOCIAL DE LOS AGENTES CIVILES DEL ESTADO DE LA PROVINCIA DE SANTA FE
                  </b-col>
              </b-row>
          </b-container>
      </div>
      
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>
