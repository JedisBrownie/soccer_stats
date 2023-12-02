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

const Tab3: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('General');
  const [url, setUrl] = useState<string>('https://soccer.bsite.net/soccer-stats-controller/attack/2');
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
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Equipe</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Compétition</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tirs pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tirs Ca pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Dribble pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Faute subies pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Note</IonCol>
            </IonRow>

            {data.map((item, index) => (
            <IonRow className='grid_content' key={index}>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._equipeNom}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._competitionNom}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._tirsPm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._tirsCaPm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._dribblePm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._fautesSubiesPm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._note}</IonCol>
            </IonRow>
            ))}
          </IonGrid>
        );
      case 'Domicile':
        return (
          <IonGrid>
            <IonRow className='theme'>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Equipe</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Compétition</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tirs pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tirs Ca pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Dribble pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Faute subies pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Note</IonCol>
            </IonRow>

            {data.map((item, index) => (
            <IonRow className='grid_content' key={index}>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._equipeNom}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._competitionNom}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._tirsPm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._tirsCaPm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._dribblePm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._fautesSubiesPm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._note}</IonCol>
            </IonRow>
            ))}
          </IonGrid>
        );
      case 'Exterieur':
        return (
          <IonGrid>
            <IonRow className='theme'>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Equipe</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Compétition</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tirs pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Tirs Ca pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Dribble pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Faute subies pm</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>Note</IonCol>
            </IonRow>

            {data.map((item, index) => (
            <IonRow className='grid_content' key={index}>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._equipeNom}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._competitionNom}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._tirsPm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._tirsCaPm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._dribblePm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._fautesSubiesPm}</IonCol>
              <IonCol size='1.5' sizeMd='1.5' sizeLg='1.5' sizeSm='1.5'>{item._note}</IonCol>
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
        setUrl('https://soccer.bsite.net/soccer-stats-controller/attack/2');
        break;
      case 'Domicile':
        setUrl('https://soccer.bsite.net/soccer-stats-controller/attack/0');
        break;
      case 'Exterieur':
        setUrl('https://soccer.bsite.net/soccer-stats-controller/attack/1');
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

export default Tab3;
