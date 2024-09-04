'use client';
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Image from 'next/image';

import gal1 from '../Images/gal1.jpg';
import gal2 from '../Images/gal2.jpg';
import gal3 from '../Images/gal3.jpg';    
import gal4 from '../Images/gal4.jpg';
import gal5 from '../Images/gal5.jpg';
import gal6 from '../Images/gal6.jpg';
import gal7 from '../Images/gal7.jpg';
import gal8 from '../Images/gal8.jpg';
import gal9 from '../Images/gal9.jpg';
import gal10 from "../Images/gal10.jpg";
import gal11 from "../Images/gal11.jpg";
import gal12 from "../Images/gal12.jpg";

export default function Images() {
  return (
    <ImageList
      sx={{
        width: 500,
        height: 450,
        transform: 'translateZ(0)',
      }}
      variant="quilted"  // This will allow different sizes based on `cols` and `rows`
      cols={4}  // Number of columns in the grid
      rowHeight={121}  // Height of a single row
      gap={8}  // Gap between items
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <Image
            src={item.img}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="top"
            actionIcon={
              <IconButton
                sx={{ color: 'white' }}
                aria-label={`star ${item.title}`}
              >
                <StarBorderIcon />
              </IconButton>
            }
            actionPosition="left"
            sx={{
              background:
                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  { img: gal2.src, title: 'Image 1', rows: 2, cols: 2 },
  { img: gal1.src, title: 'Image 2', rows: 1, cols: 1 },
  { img: gal10.src, title: 'Image 3', rows: 1, cols:  1}, 
  { img: gal4.src, title: 'Image 4', rows: 2, cols: 2 },
  { img: gal5.src, title: 'Image 5', rows: 1, cols: 1 },
  { img: gal6.src, title: 'Image 6', rows: 1, cols: 1 },
  { img: gal7.src, title: 'Image 7', rows: 1, cols: 1 },
  { img: gal8.src, title: 'Image 8', rows: 1, cols: 1 },
  { img: gal9.src, title: 'Image 9', rows: 1, cols: 2 },
  { img: gal11.src, title: 'Image 10', rows: 1, cols: 1 },
  { img: gal12.src, title: 'Image 11', rows: 1, cols: 2 },
  { img: gal3.src, title: 'Image 12', rows: 1, cols: 1 },

];
