import {BrowserRouter , Routes , Route} from 'react-router-dom';
import DashbordComponent from './Components/AdminComponent/DashboardComponent';
import LoginComponent from './Components/AdminComponent/LoginComponet';
import LoginMedComponent from './Components/MedecinComponent/LoginMedComponent';
import LoginRespComponent from './Components/ResponsableComponent/LoginRespComponent';
import DashboardRespComponent from './Components/ResponsableComponent/DashboardRespComponent';
import RegisterMedComponent from './Components/MedecinComponent/RegisterMedComponent';
import RegisterRespComponent from './Components/ResponsableComponent/registerRespComponent';
import ListeUserpm from './Components/AdminComponent/ListUsersPM';
import AddUser from'./Components/AdminComponent/AddUser';
import ViewUser from './Components/AdminComponent/ViewUserComponent';
import DashboardAdm from './Components/AdminComponent/Pages/DashboardAdm';
import ListeUserPH from './Components/AdminComponent/ListUsersPH';
import ListArticle from './Components/AdminComponent/ListArticle'
import ViewArticle from './Components/AdminComponent/ViewArticle';
import EditArticle from './Components/AdminComponent/EditArticle';
import AddArticleForm from './Components/AdminComponent/AddArticle';
import ListPublication from './Components/AdminComponent/ListPublication'
import EditPublication from './Components/AdminComponent/EditPublication';
import ViewPublication from './Components/AdminComponent/Viewpub';
import AddPublication from './Components/AdminComponent/AddPublication';
import Wlc from './Components/AdminComponent/Pages/wlcAd';
import EditPM from './Components/AdminComponent/EditPM';
import EditPH from './Components/AdminComponent/EditPH';
import ViewAdmin from './Components/AdminComponent/Pages/Profil';
import ListCentre from './Components/AdminComponent/ListCentres';
import AddCentre from './Components/AdminComponent/AddCentre';
import ViewCentre from './Components/AdminComponent/ViewCentre';
import EditCentre from './Components/AdminComponent/EditCentre';
import ViewPm from './Components/AdminComponent/ViewUserComponent';
import ViewPh from './Components/AdminComponent/ViewPHComponent';
import DashboardMedComponent from './Components/MedecinComponent/DashboardMedComponent';
import DemandeSangComponent from './Components/MedecinComponent/AddDemande';
import WlcMed from './Components/MedecinComponent/page/wlcMedecin';
import WlcResp from './Components/ResponsableComponent/page/WlcResp'
import RestPassword from './Components/MedecinComponent/ResetPassword'
import DashboardUser from './Components/UserComponent/DashboardUser'
import ListDemandeSang from './Components/MedecinComponent/ListeDemande';
import ListDemandeSangResp from './Components/ResponsableComponent/ListDemandeSangResp';
import Acceuil from './Components/UserComponent/AcceuilComponent';
import DonSang  from './Components/UserComponent/DonSang'
import DonPlasma from './Components/UserComponent/DonPlasma'
import DonPlaquette from './Components/UserComponent/DonPlaquette'
import Condition from './Components/UserComponent/Conditions'
import ContreIndection from './Components/UserComponent/ContreIndection'
import Delai from './Components/UserComponent/Delai'
import HomeLogin from './Components/UserComponent/PageHomeLogin'
import RegistreMorale from './Components/UserComponent/RegistreUserMorale'
import RegistrePhysique from './Components/UserComponent/RegistreUserPhysique'
import LoginPhysique from './Components/UserComponent/LoginPhysique'
import LoginMorale from './Components/UserComponent/LoginMorale'
import LoginMoralePhysique from './Components/UserComponent/LoginMoralePhy'
import Rdv from './Components/UserComponent/Rdv'
import Contact from './Components/UserComponent/Contact'
import Mission from './Components/UserComponent/Mission'
import Valeur from './Components/UserComponent/Valeur'
import Sang from './Components/UserComponent/Sang'
import GroupeSanguins from './Components/UserComponent/GroupesSanguins'
import PocheSang from './Components/UserComponent/PocheSang'
import Sfax from './Components/UserComponent/Sfax'
import Gabes from './Components/UserComponent/Gabes'
import Jandouba from './Components/UserComponent/Jandouba'
import Sousse from './Components/UserComponent/Sousse'
import Gafsa from './Components/UserComponent/Gafsa'
import Publication from './Components/UserComponent/Publication'

import OrganiserCollect from './Components/UserComponent/OrganiserCollect'
import Ambassadeur from './Components/UserComponent/Ambassadeur'
import Teste from './Components/UserComponent/Test'
import Succes from './Components/UserComponent/Succes'
import Echec from './Components/UserComponent/Echec'
import React from 'react';
import OrganiseCollect from './Components/UserComponent/OrganiserCollect';
import ListRdv from './Components/MedecinComponent/ListRdv'
import ListRdvAccepter from './Components/MedecinComponent/ListRDVAccepter'
import ListdmdEventResp from './Components/ResponsableComponent/ListdmdEventResp'
import ListDemandeAmbResp from './Components/ResponsableComponent/ListDemandeAmbResp'
import ViewDmdAmb from './Components/ResponsableComponent/ViewDmdAmb'
import ViewDmdEvent from './Components/ResponsableComponent/ViewDmdEvent'
import ListAmbAccepter from './Components/ResponsableComponent/ListAmbAccepter'
import ConsulterRDV from './Components/UserComponent/ConsulterRDV'
import ConsulterAMB from './Components/UserComponent/ConsulterAMB'
import ConsulterdmdCollecte from './Components/UserComponent/ConsulterdmdCollecte'
import ActualiteArtPub from './Components/UserComponent/ActualitéArtPub'
import RdvDetails from './Components/MedecinComponent/AccepterRdv';
import ResetPasswordRes from './Components/ResponsableComponent/page/ResetPasswordRes'
import RestPasswordPM from './Components/UserComponent/ResetPm'
import RestPasswordPH from './Components/UserComponent/ResetPh'
import HomeLoginPmPh from './Components/UserComponent/LoginMoralePhy';
import EditUser from './Components/AdminComponent/EditUser';
import EditUserPH from './Components/AdminComponent/EditPH';
import ViewPH from './Components/AdminComponent/ViewPHComponent';
import ProfilResp from './Components/ResponsableComponent/ProfilResp';
import ProfilMed from './Components/MedecinComponent/page/ProfilMed';
import Message from './Components/AdminComponent/Message';
import RepondreMsg from './Components/AdminComponent/RepondreMsg';
import DashboardUserComponent from './Components/UserComponent/DashboardUser';
import Analyse from './Components/UserComponent/Analyse';
import ProfilUserPh from './Components/UserComponent/ProfilUser';
import EditUserPh from './Components/UserComponent/EditPh';
import PasswordChange from './Components/UserComponent/ChangerPassPh';
import EdituserM from './Components/UserComponent/EditM';
import ProfilUserM from './Components/UserComponent/ProfilUserM';
import PasswordChangeM from './Components/UserComponent/ChangerPassM';
import EdituserPh from './Components/UserComponent/EditPh';
import AjouterMedia from './Components/UserComponent/AjouterMedia';
import ListMedia from './Components/AdminComponent/ListMedia';
import NosEvent from './Components/UserComponent/nosevents';
import ListeMed from './Components/AdminComponent/ListMed';
import ListeResp from './Components/AdminComponent/ListResp';
import ViewMed from './Components/AdminComponent/ViewMed';
import EditMed from './Components/MedecinComponent/page/EditprofilMed';
import ChangerPasswordMed from './Components/MedecinComponent/page/ChangerPasswordMed';
import EditRes from './Components/ResponsableComponent/page/EditProfilRes';
import ChangerPasswordRes from './Components/ResponsableComponent/page/ChangerPasswordRes';

import EditeDmdSang from './Components/MedecinComponent/EditDmdSang';
import ViewMedia from './Components/AdminComponent/ViewMedia';
import ViewDmdAmbNonAccepter from './Components/ResponsableComponent/ViewDmdAmbNonAccepter';
import ProfilAdmin from './Components/AdminComponent/Pages/Profil';
import ChangerPasswordAdmin from './Components/AdminComponent/Pages/ChangerPasswordAdmin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardUserComponent/>}></Route>
        <Route path="/nosevents" element={<NosEvent/>}></Route>
        <Route path="/actualite" element={<ActualiteArtPub />}></Route>
        <Route path="/donSang" element={<DonSang />}></Route>
        <Route path="/donPlasma" element={<DonPlasma />}></Route>
        <Route path="/DonPlaquette" element={<DonPlaquette/>}></Route>
        <Route path="/Conditions" element={<Condition/>}></Route>
        <Route path="/ContreIndection" element={<ContreIndection/>}></Route>
        <Route path="/Delai" element={<Delai/>}></Route>
        <Route path="/LoginUser" element={<HomeLoginPmPh />}></Route>
        <Route path="/HomeLogin" element={<HomeLogin />}></Route>

        <Route path="/LoginPH" element={<LoginPhysique />}>
          
        </Route>
        <Route path="/registerPH" element={<RegistrePhysique />}></Route>
        <Route path="/Ambassadeur" element={<Ambassadeur />} ></Route>
        <Route path="/Rdv" element={<Rdv />}></Route>
        <Route path="/consulterRdv" element={<ConsulterRDV />}></Route>
        <Route path="/Amb" element={<Ambassadeur />}></Route>
        <Route path="/consulterAmb" element={<ConsulterAMB />}></Route>
        <Route path="/LoginPM" element={<LoginMorale />}></Route>
        <Route path="/RegisterPM" element={<RegistreMorale />}></Route>
        <Route path="/OrganiseCollect" element={<OrganiseCollect />} ></Route>
        <Route path="/ConsulterdmdCollecte" element={<ConsulterdmdCollecte />}></Route>

        <Route path="Test" element={<Teste />}></Route>
        <Route path="Succes" element={<Succes />}></Route>
        <Route path="Echec" element={<Echec />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
        <Route path="sfax" element={<Sfax />}></Route>
        <Route path="Gafsa" element={<Gafsa />}></Route>
        <Route path="Jandouba" element={<Jandouba />}></Route>
        <Route path="Sousse" element={<Sousse />}></Route>
        <Route path="Gabes" element={<Gabes />}></Route>
        <Route path="Mission" element={<Mission />}></Route>
        <Route path="Valeur" element={<Valeur />}></Route>
        <Route path="Sang" element={<Sang />}></Route>
        <Route path="GroupeSanguins" element={<GroupeSanguins />}></Route>
        <Route path="PocheSang" element={<PocheSang />}></Route>
        <Route path="Analyse" element={<Analyse/>}></Route>

      
      <Route path="/" element={<DashboardAdm />}>
        <Route path="/wlcAd" element={<Wlc />} ></Route>
        <Route path="/Profil/:id" element={<ProfilAdmin />}></Route>
        <Route path="/ChangerPasswordAdm/:id" element={<ChangerPasswordAdmin/>} ></Route>
        <Route path="/EditUser/:id_user" element={<EditUser />} ></Route>

        <Route path="/ListUserspm" element={<ListeUserpm />} ></Route>
        <Route path="/editpm/:id_user" element={<EditPM />} ></Route>
        <Route exact path="/viewuserpm/:id_user" element={<ViewUser />} />

        <Route exact path="/ListMedia" element={<ListMedia/>} />
        <Route path="/ListUsersph" element={<ListeUserPH />} ></Route>
        <Route path="/editph/:id_user" element={<EditUserPH/>} ></Route>
        <Route exact path="/viewuserph/:id_user" element={<ViewPH />} />


        <Route path="/ListArticle" element={<ListArticle />} ></Route>
        <Route exact path="/editeArt/:id" element={<EditArticle />} />
        <Route exact path="/viewArt/:id" element={<ViewArticle />} />
        <Route exact path="/addArt" element={<AddArticleForm />} />
        <Route path="/ListResp" element={<ListeResp/>} ></Route>
         <Route path="/ListMed" element={<ListeMed />} ></Route>
           <Route path="/ViewMed/:id_med" element={<ViewMed />} ></Route>
        <Route path="/ListPub" element={<ListPublication />} ></Route>
        <Route exact path="/editePub/:id" element={<EditPublication />} />
        <Route exact path="/viewPub/:id" element={<ViewPublication />} />
        <Route exact path="/addPub" element={<AddPublication />} />


        <Route path="/ListCentre" element={<ListCentre />} ></Route>
        <Route exact path="/viewCentre/:id_centre" element={<ViewCentre />} />
        <Route exact path="/editeCentre/:id_centre" element={<EditCentre />} />
        <Route exact path="/addCentre" element={<AddCentre />} />
        <Route exact path="/viewMedia/:id" element={<ViewMedia/>}/>
        <Route exact path="/Message" element={<Message />} />
        <Route exact path="/repondreMsg/:id" element={<RepondreMsg />} />
      </Route>


      <Route path="/login" element={<LoginComponent />} ></Route>
      <Route path="/loginM" element={<LoginMedComponent />}></Route>
      <Route path="/registerM" element={<RegisterMedComponent />} ></Route>
      <Route path="/" element={<DashboardMedComponent />}>
        <Route path="/wlcmed" element={<WlcMed />} ></Route>
        <Route path="/addDemande" element={<DemandeSangComponent />} ></Route>
        <Route path="/listdmd" element={<ListDemandeSang />} ></Route>
        <Route path='/editeDmdSang/:id_dmd' element={<EditeDmdSang/>}></Route>
        <Route path="/ListRDV" element={<ListRdv />} ></Route>
        <Route exact path="/AccepterRdv/:id" element={<RdvDetails />} />
        <Route path="/ListRdvAccepter" element={<ListRdvAccepter />} ></Route>
        <Route path="/ProfilMed/:id" element={<ProfilMed/>} ></Route>
        <Route path="/EditMed/:id" element={<EditMed/>} ></Route>
        <Route path="/ChangerPasswordMed/:id" element={<ChangerPasswordMed/>} ></Route>

        


      </Route>


      <Route path="/loginR" element={<LoginRespComponent />}></Route>
      <Route path="/registerR" element={<RegisterRespComponent />} ></Route>

      <Route path="/" element={<DashboardRespComponent />}>
        <Route path="/wlcresp" element={<WlcResp />} ></Route>
        <Route path="/listdmdSangResp" element={<ListDemandeSangResp />} ></Route>
        <Route path="/listdmdEventResp" element={<ListdmdEventResp />} ></Route>
        <Route path="/listdmdAmbResp" element={<ListDemandeAmbResp />} ></Route>
        <Route path="/viewdmdevent/:id" element={<ViewDmdEvent />} ></Route>
        <Route path="/ViewDmdAmb/:id" element={<ViewDmdAmb />} ></Route>
        <Route path="/ListAmbAccepter" element={<ListAmbAccepter />} ></Route>
        <Route path="/ProfilResp/:id" element={<ProfilResp />} ></Route>
        <Route path="/EditRes/:id" element={<EditRes/>} ></Route>
        
        <Route path='/ViewDmdAmbNonAccepter/:id' element={<ViewDmdAmbNonAccepter/>}></Route>
        <Route path="/ChangerPasswordRes/:id" element={<ChangerPasswordRes/>} ></Route>
      </Route>
    

      <Route exact path="/adduser" element={<AddUser />} />
      <Route path="/RestPassword" element={<RestPassword />}></Route>
      <Route path="/RestPasswordPM" element={<RestPasswordPM/>}></Route>
      <Route path="/RestPasswordPH" element={<RestPasswordPH/>}></Route>
      <Route path="/RestPasswordRes" element={<ResetPasswordRes/>}></Route>
      <Route path="/ProfilUserPh/:id" element={<ProfilUserPh/>}></Route>
      <Route path="/ChangerPassword/:id" element={<PasswordChange/>}></Route>
      <Route path="/edituserPh/:id" element={<EdituserPh/>}></Route>

      <Route path="/ProfilUserPM/:id_user" element={<ProfilUserM/>}></Route>
      <Route path="/ChangerPasswordM/:id_user" element={<PasswordChangeM/>}></Route>
      <Route path="/edituserM/:id_user" element={<EdituserM/>}></Route>
      <Route exact path="/AjouterMedia/:id_event" element={<AjouterMedia/>} ></Route>
     
      <Route exact path="/Message" element={<Message />} />
        <Route exact path="/repondreMsg/:id" element={<RepondreMsg />} />

</Routes>
    </BrowserRouter>
  );
}

export default App;