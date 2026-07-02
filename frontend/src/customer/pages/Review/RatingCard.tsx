import { Box, Button, Rating, Typography } from '@mui/material';
import React from 'react'
import ReviewCard from './ReviewCard';

function RatingCard() {
    const data = [
    { label: "Excellent", value: 45, color: "#4caf50" },
    { label: "Good", value: 30, color: "#2196f3" },
    { label: "Medium", value: 15, color: "#ff9800" },
    { label: "Poor", value: 10, color: "#f44336" },
  ];

    const total = data.reduce((sum, item) => sum + item.value, 0);
  return (
    <div>
        <div className='rating border border-gray-200 py-2'>
            <div className='flex items-center gap-x-3'>
            <Rating value={4.5}readOnly precision={0.5}/>
            <span className='text-gray-400'>Rating</span>
            </div>

            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
            {data.map((item, index) => {
                const percent = (item.value / total) * 100;

                return (
                <Box
                    key={index}
                    sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    }}
                >
                    {/* LABEL (LEFT) */}
                    <Typography sx={{ width: 100, fontWeight: 600 }}>
                    {item.label}
                    </Typography>

                    {/* PROGRESS (MIDDLE) */}
                    <Box
                    sx={{
                        flex: 1,
                        height: 10,
                        backgroundColor: "#eee",
                        borderRadius: 5,
                        overflow: "hidden",
                    }}
                    >
                    <Box
                        sx={{
                        width: `${percent}%`,
                        height: "100%",
                        backgroundColor: item.color,
                        }}
                    />
                    </Box>

                    {/* VALUE (RIGHT) */}
                    <Typography sx={{ width: 50, textAlign: "right", fontWeight: 600 ,marginRight:2 }}>
                    {item.value}
                    </Typography>
                </Box>
                );
            })}
            </Box>

        </div>     
    </div>
  )
}

export default RatingCard
