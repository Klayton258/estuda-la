<template>
    <navbar />
    <section class="header">
        <div class="contain">
         <img src="images/Header-join.png">
        </div>
    </section>

    <section class="content">
       <div class="container">
         <div class="row">
            <div class="col-6 image-bg">
                <img src="images/her-join.png">
            </div>
            <div class="col-6 col-context">
                <h3>Aplicar como explicador</h3>
                <p>
                    Ensinar é uma carreira vital e admirável. Como tal, vem com bastante 
                    responsabilidade, tanto na prática quanto na preparação, com muitas 
                    habilidades necessárias para ser professor. As etapas a seguir fornecem uma 
                    divisão geral dos requisitos para os professores
                </p>
                <!-- ========================== -->
                <div class="wrapper">
                    <div class="tabs">
                      <div class="tab">
                        <input type="radio" name="css-tabs" id="tab-1" checked class="tab-switch">
                        <label for="tab-1" class="tab-label">Requisitos de explicador</label>
                        <div class="tab-content">
                            <div class="col-12">
                                <ul>
                                    <li><div class="text">Licenciatura</div></li>
                                    <li><div class="text">Participar em ensino surpevisionado</div></li>
                                    <li><div class="text">Licensa para ensinar</div></li>
                                    <li><div class="text">Ter menstrado</div></li>
                                </ul>
                            </div>    
                        </div>
                      </div>
                      <div class="tab">
                        <input type="radio" name="css-tabs" id="tab-2" class="tab-switch">
                        <label for="tab-2" class="tab-label">Regras de explicador</label>
                        <div class="tab-content">My father now and then sending me small sums of money, I laid them out in learning navigation, and other parts of the mathematics, useful to those who intend to travel, as I always believed it would be, some time or other, my fortune to do. </div>
                      </div>
                    </div>
                </div>
                <!-- ========================= -->
            </div>
        </div>
       </div>
    </section>
    <section class="container secction-2">
        <h1>Como applicar como Explicador</h1>
        <img src="images/teacher-vd.png" class="online-class" alt="">
    </section>
    <footerComponent />
</template>

<script>
import navbar from '../../components/NavBarComponent.vue'
import footerComponent from '../../components/FooterComponent.vue'

export default {
components:{
    navbar,
    footerComponent
}
}
</script>

<style lang="scss" src="./style.scss" scoped>

</style>