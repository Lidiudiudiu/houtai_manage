<template>
  <div class="container">
        <h2>
        <span>V</span>
        <span>I</span>
        <span>S</span>
        <span>I</span>
        <span>T</span>
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

<style>
  .container{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
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

  h2 span{
    animation: animate 1.4s linear infinite;
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