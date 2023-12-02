import {   IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar } from '@ionic/react';
import React,{ useState } from 'react';
import './Tab1.css';

const Tab3: React.FC = () => {
  
  const [selectedOption, setSelectedOption] = useState<string>('Exterieur');

  const renderGrid = () => {
    switch (selectedOption) {
      case 'Generale':
        return (
          <IonGrid>
<IonRow className='theme'>

            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Equipe</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Compétition</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tirs pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tacles pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Interception pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Faute pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Hors-jeux pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Note</IonCol>

            </IonRow>
            <IonRow className='grid_content'>

            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Bayern Munich</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Bundesliga</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>7.7</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>13.3</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>7.7</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>9.7</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>1.5</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>7.21</IonCol>

            </IonRow>          </IonGrid>
        );
      case 'Domicile':
        return (
          <IonGrid>
<IonRow className='theme'>

            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Equipe</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Compétition</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tirs pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tacles pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Interception pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Faute pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Hors-jeux pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Note</IonCol>

            </IonRow>
            <IonRow className='grid_content'>

            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Bayern Munich</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Bundesliga</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>7.7</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>13.3</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>7.7</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>9.7</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>1.5</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>7.21</IonCol>

            </IonRow>          </IonGrid>
        );
      case 'Exterieur':
        return (
          <IonGrid>
<IonRow className='theme'>

            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Equipe</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Compétition</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tirs pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tacles pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Interception pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Faute pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Hors-jeux pm</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Note</IonCol>

            </IonRow>
            <IonRow className='grid_content'>

            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Bayern Munich</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Bundesliga</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>7.7</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>13.3</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>7.7</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>9.7</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>1.5</IonCol>
            <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>7.21</IonCol>

            </IonRow>          </IonGrid>
        );
      default:
        return null;
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol className='content_title' size="6">
                <IonTitle>Statistique Générale</IonTitle>
              </IonCol>
              <IonCol size="2"></IonCol>
              <IonCol size="4">
                <IonSearchbar animated={true} placeholder="research" className='search_bar'></IonSearchbar>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader>
          <IonList>
            <IonItem>
              <IonSelect
                label="Categories des statistique rechercher"
                labelPlacement="floating"
                value={selectedOption}
                onIonChange={(e) => setSelectedOption(e.detail.value)}
              >
                <IonSelectOption value="Generale">Generale</IonSelectOption>
                <IonSelectOption value="Domicile">Domicile</IonSelectOption>
                <IonSelectOption value="Exterieur">Exterieur</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
        </IonHeader>

        {renderGrid()}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
