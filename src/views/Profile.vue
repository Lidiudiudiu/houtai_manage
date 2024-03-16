<template>
  <div class="container">
        <h2>
        <span>M</span>
        <span style="margin-right: 40px;">Y</span>
        <span>C</span>
        <span>E</span>
        <span>N</span>
        <span>T</span>
        <span>E</span>
        <span>R</span>
      </h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to left bottom, #d16ba5,
     #c777b9, #ba83ca, #aa8fd8,
     #9a9ae1, #8aa7ec, #79b3f4,
      #69bff8, #52cffe, #41dfff,
       #46eefa, #5ffbf1);
    min-height: calc(100vh - 124px)
  }
  h2{
    font-size: 6em;
    color: #333;
    font-weight: 500;
  }
  h2 span:nth-child(1){
    animation-delay: 0s;
  }
  h2 span:nth-child(2){
      animation-delay: 0.2s;
  }
  h2 span:nth-child(3){
      animation-delay: 0.4s;
  }
  h2 span:nth-child(4){
      animation-delay: 0.6s;
  }
  h2 span:nth-child(5){
      animation-delay: 0.8s;
  }
  h2 span:nth-child(6){
      animation-delay: 1s;
  }
  h2 span:nth-child(7){
      animation-delay: 1.2s;
  }
   h2 span:nth-child(8){
      animation-delay: 1.4s;
  }
  h2 span{
    animation: animate 1.8s linear infinite;
  }
  @keyframes animate {
      0%,80%{
          color: #333;
          box-shadow: none;
      }
      100%{
          color: #fff;
          text-shadow: 0 0 10px #fff,
                      0 0 20px #fff,
                     0 0 40px #fff,
                     0 0 80px #fff,
                     0 0 160px #fff;              
      }
  }


</style>