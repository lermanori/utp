<template>
    <v-container>
        <v-layout>
            <v-flex>
                <h1 id="title" class="mb-5 text-xs-center display-4 font-weight-thin">
                    introduction
                </h1>
                <h4 id="subtitle" class="mb-5 text-xs-center display-1 font-weight-black">
                    ----Work In Progress----
                </h4>
                <p id="paragraph" class="text-xs-center body-2 font-weight-medium">
                    assets and creativity by rino avidar, code: by ori lerman.
                </p>
            </v-flex>
        </v-layout>
    </v-container>

    
</template>

<script>
export default {

}
</script>

<style scoped>
@keyframes fadeIn {
    from{opacity: 0;}
    to{opacity: 1;}
}
@keyframes LeftIn {
    from{transform: translateX(-400px);}
    to{transform: translateX(0px);
        opacity: 1;}
}

@keyframes rightIn {
    from{transform: translateX(400px);}
    to{transform: translateX(0px);
        opacity: 1;}
}
#title{
    opacity: 0;
    animation-name: fadeIn;
    animation-duration: 4s;
    animation-fill-mode: forwards;
}
#subtitle{
    
    animation-name: leftIn;
    animation-duration: 4s;
    animation-fill-mode: forwards;
}
#paragraph{
    
    animation-name: rightIn;
    animation-duration: 4s;
    animation-fill-mode: forwards;
}

</style>
