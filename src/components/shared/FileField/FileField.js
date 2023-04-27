import { Unique } from 'functions/common';
import React, { useEffect } from 'react'
import { useFilePicker } from 'use-file-picker';
export default function FileField({
    id = Unique(),
    btn_component = <span>Select File</span>,
    className,
    label,
    labelClassName,
    readAs = 'DataURL',
    type = 'image/*',
    totalFileLimit = 1,
    multiple = false,
    minFileSize = 0.01,
    maxFileSize = 1.5,
    onChange,
    onError,
    minWidth = 50,
    minHeight = 50,
    maxWidth = 800,
    maxHeight = 600
}) {
    const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
        readAs: readAs,
        accept: type,
        multiple: multiple,
        limitFilesConfig: { max: totalFileLimit },
        minFileSize: minFileSize,
        maxFileSize: maxFileSize,
        imageSizeRestrictions: {
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            minHeight: minHeight,
            minWidth: minWidth,
        },
    });
    useEffect(() => {
        if (filesContent.length > 0) {
            onChange(filesContent)
        }
        else {
            onError({
                ...errors, requirements: {
                    readAs: readAs,
                    accept: type,
                    multiple: multiple,
                    totalFileLimit: totalFileLimit,
                    minFileSize: minFileSize,
                    maxFileSize: maxFileSize,
                    maxHeight: maxHeight,
                    maxWidth: maxWidth,
                    minHeight: minHeight,
                    minWidth: minWidth,
                }
            })
        }

    }, [filesContent, loading, errors])
    return (
        <div className={`${className} w-full flex flex-col`}>
            {
                label && <label className={labelClassName}>{label}</label>
            }
            <div className='w-full relative'>
                {btn_component}
                <label for={`#${id}`} className="w-full z-[2] absolute w-full h-full top-0 left-0  cursor-pointer"></label>
            </div>
            <input id={`#${id}`} type="file" onChange={e => onChange(e.target.files)} className='hidden' />
        </div >
    )
}
