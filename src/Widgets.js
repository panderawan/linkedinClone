import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn Actualités</h2>
        <InfoIcon fontSize="1em" />
      </div>
      {newsArticle(
        'Incroyable nouvelle : le clone de LinkedIn est là!',
        'A la une • 32 lecteurs'
      )}
      {newsArticle('React, ce langage fascinant!', 'Il y a 2 j • 147 lecteurs')}
      {newsArticle(
        'Ukraine, les dernières infos.',
        'Il y a 2 j • 3184 lecteurs'
      )}
      {newsArticle(
        'Les fintech en effervescence.',
        'Il y a 5 j • 5333 lecteurs'
      )}
      {newsArticle(
        'Travaillez-vous en musique?',
        'Il y a 6 j • 1423 lecteurs.'
      )}
    </div>
  );
}

export default widgets;
