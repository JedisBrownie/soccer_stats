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
import React,{ useState, useEffect } from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('General');
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://soccer.bsite.net/soccer-stats-controller/general/2');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const renderGrid = () => {
    switch (selectedOption) {
      case 'General':
        return (
          <IonGrid>
            <IonRow className='theme'>

            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Equipe</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Compétition</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Buts</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Tirs pm</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Discipline</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Possession%</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>PasseRéussies%</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>AériensGagnés</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Note</IonCol>

            </IonRow>
            <IonRow className='grid_content'>

            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Bayern Munich</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Bundesliga</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>43</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>7.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>13.3</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>7.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>9.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>1.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>7.21</IonCol>

            </IonRow>
          </IonGrid>
        );
      case 'Domicile':
        return (
          <IonGrid>
            <IonRow className='theme'>

            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Equipe</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Compétition</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Buts</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Tirs pm</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Discipline</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Possession%</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>PasseRéussies%</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>AériensGagnés</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Note</IonCol>

            </IonRow>
            <IonRow className='grid_content'>

            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Bayern Munich</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Bundesliga</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>43</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>7.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>13.3</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>7.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>9.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>1.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>7.21</IonCol>

            </IonRow>
          </IonGrid>
        );
      case 'Exterieur':
        return (
          <IonGrid>
            <IonRow className='theme'>

            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Equipe</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Compétition</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Buts</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Tirs pm</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Discipline</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Possession%</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>PasseRéussies%</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>AériensGagnés</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Note</IonCol>

            </IonRow>
            <IonRow className='grid_content'>

            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Bayern Munich</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>Bundesliga</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>43</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>7.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>13.3</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>7.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>9.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>1.7</IonCol>
            <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>7.21</IonCol>

            </IonRow>
          </IonGrid>
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
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader>
          <IonList>
            <IonItem>
              <IonSelect
                label="Categorie des statistique recherchée"
                labelPlacement="floating"
                value={selectedOption}
                onIonChange={(e) => setSelectedOption(e.detail.value)}
              >
                <IonSelectOption value="General">General</IonSelectOption>
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

export default Tab1;
