<template>
  <div>
    <b-row>
      <b-col sm="6">
        <div>
          <b-card title="Santa Fe" sub-title="Tucumán 2748">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.542946384174!2d-60.71079928473259!3d-31.646362281328148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b5a9bab36a119d%3A0x868892845e096b0c!2sTucum%C3%A1n+2748%2C+S3000+Santa+Fe!5e0!3m2!1ses!2sar!4v1493822829370"
              width="100%"
              height="350"
              style="border: 0;"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
            <b-button v-b-toggle.collapseTelefonosSantaFe variant="outline-info">Ver Teléfonos</b-button>
            <b-collapse id="collapseTelefonosSantaFe" class="mt-2">
              <b-card-text>
                <div v-for="(telefono, index) of telefonosSantaFe" :key="index">
                  <small>{{telefono}}</small>
                </div>
              </b-card-text>
            </b-collapse>
          </b-card>
        </div>
      </b-col>
      <b-col sm="6">
        <div>
          <b-card title="Rosario" sub-title="Boulevard Oroño 482">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.4204477568655!2d-60.65476488470182!3d-32.93990718092324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab476f3c192b%3A0x1e0a8d65a8211633!2sBv.+Oro%C3%B1o+482%2C+Rosario%2C+Santa+Fe!5e0!3m2!1ses!2sar!4v1493823507378"
              width="100%"
              height="350"
              style="border: 0;"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
            <b-button v-b-toggle.collapseTelefonosRos variant="outline-info">Ver Teléfonos</b-button>
            <b-collapse id="collapseTelefonosRos" class="mt-2">
              <b-card-text>
                <div v-for="(telefono, index) of telefonosRosario" :key="index">
                  <small>{{telefono}}</small>
                </div>
              </b-card-text>
            </b-collapse>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Maps",
  data() {
    return {
      telefonosRosario: [
        "Mesa de Entradas - 1",
        "Beneficios Unipersonales - 4 / 5",
        "Jefatura - 7",
        "Prestamos - 2",
        "Afiliaciones y Acumulación - 3"
      ],
      telefonosSantaFe: [
        "Tesorería - 104",
        "Préstamos - 114",
        "Fallecimiento - 106 / 107",
        "Enf. Terminal - 105",
        "Institución de Beneficiarios - 109",
        "Beneficios Unipersonales - 124",
        "Secretaría Privada - 132",
        "Mesa de Entradas - 145",
        "Afiliaciones y Acumulación – 301",
        "Fax - 108"
      ]
    };
  }
};
</script>


