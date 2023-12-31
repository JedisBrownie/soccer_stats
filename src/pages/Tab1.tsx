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
import axios from 'axios';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('General');
  const [url, setUrl] = useState<string>('https://soccer.bsite.net/soccer-stats-controller/general/2');
  const [data, setData] = useState<any[]>([]);

  const fetchData = async (fetchUrl: string) => {
    try {
      const response = await axios.get(fetchUrl);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

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

            {data.map((item, index) => (
            <IonRow className='grid_content' key={index}>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._equipeNom}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._competitionNom}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._buts}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._tirsPm}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>
                <span style={{ color: 'black', backgroundColor: 'yellow' }}>
                  {item._cartonJaune}
                </span>{' '}
                <span style={{ color: 'white', backgroundColor: 'red' }}>
                  {item._cartonRouge}
                </span>
              </IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._possession}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._passesReussies}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._aeriensGagnes}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._note}</IonCol>
            </IonRow>
            ))}
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

            {data.map((item, index) => (
            <IonRow className='grid_content' key={index}>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._equipeNom}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._competitionNom}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._buts}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._tirsPm}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>
                <span style={{ color: 'black', backgroundColor: 'yellow' }}>
                  {item._cartonJaune}
                </span>{' '}
                <span style={{ color: 'white', backgroundColor: 'red' }}>
                  {item._cartonRouge}
                </span>
              </IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._possession}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._passesReussies}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._aeriensGagnes}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._note}</IonCol>
            </IonRow>
            ))}
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

            {data.map((item, index) => (
            <IonRow className='grid_content' key={index}>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._equipeNom}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._competitionNom}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._buts}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._tirsPm}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>
                <span style={{ color: 'black', backgroundColor: 'yellow' }}>
                  {item._cartonJaune}
                </span>{' '}
                <span style={{ color: 'white', backgroundColor: 'red' }}>
                  {item._cartonRouge}
                </span>
              </IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._possession}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._passesReussies}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._aeriensGagnes}</IonCol>
              <IonCol size='1.333' sizeMd='1.333' sizeLg='1.333' sizeSm='1.333'>{item._note}</IonCol>
            </IonRow>
            ))}
          </IonGrid>
        );
      default:
        return null;
    }
  };

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);

    switch (value) {
      case 'General':
        setUrl('https://soccer.bsite.net/soccer-stats-controller/general/2');
        break;
      case 'Domicile':
        setUrl('https://soccer.bsite.net/soccer-stats-controller/general/0');
        break;
      case 'Exterieur':
        setUrl('https://soccer.bsite.net/soccer-stats-controller/general/1');
        break;
      default:
        break;
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
                onIonChange={(e) => handleSelectChange(e.detail.value)}
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
