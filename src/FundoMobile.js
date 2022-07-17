function FundoMobile()
{
    const ions = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    return(
        <div class="fundo-mobile">
            {ions.map(ion => <ion-icon name={ion}></ion-icon>)}
        </div>
    );
}

export default FundoMobile;