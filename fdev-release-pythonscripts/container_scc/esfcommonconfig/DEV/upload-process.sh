#!/bin/bash
export LANG=zh_CN.gb18030

current_dir_path=$(dirname $(readlink -f "$0"))
current_date=`date '+%Y%m%d'`

if [ ! -e ./config.info ];
then
        echo '��Ǩ�������ļ��б����ö�ȡʧ�ܣ���ǰĿ¼�����ļ���config.info������'
        exit 0
fi

mkdir -p ./log
echo "error log" > ./log/error.log
echo "success log" > ./log/success.log

cat ./config.info | while read line
do
        if [ ! -n "$line" ]
        then
                continue
        fi
        
        info_arr=($line)
        bucket_name=${info_arr[0]}
        app_id=${info_arr[1]}
		file_name=${info_arr[2]}
        cd /app/s3Config/
        msg=`sh uploadFile.sh $bucket_name ${current_dir_path}"/"${file_name}`
        OLD_IFS=${IFS}
        IFS='
		'
        temp_msg=($msg)
        for var in ${temp_msg[@]}
        do
                if [[ $msg =~ "�ϴ��ɹ�" ]]
                then
                        echo -e "${var}" >> ${current_dir_path}/log/success.log
                else
                        echo -e "${var}" >> ${current_dir_path}/log/error.log
                fi
        done

        if [[ $msg =~ "�ϴ�ʧ��" ]]
        then
                echo "΢����${app_id}�����ļ��ϴ�ʧ�ܣ�����鿴�ļ�./log/error.log"
        fi
		IFS=$OLD_IFS

done
