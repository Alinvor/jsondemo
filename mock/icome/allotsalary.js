var Mock = require('mockjs')

module.exports = () => {
    return Mock.mock({
        approvalInfo: {
            code: '200',
            message: '成功',
            data: {
                approvalId: '3',
                appId: 'app_10007688',
                approvalName: '@ctitle(6, 50)',
                // approvalName: '@ctitle(6, 20)',
                approvalDesc:
                    '测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3测试审批3',
                approvalType: '1',
                approvalStatus: '4',
                isDeleted: '0',
                createrId: '10053408',
                createTime: '2021-08-05 15:14:08',
                updaterId: '0',
                updateTime: '2021-08-09 17:04:05',
                authWithdraw: '1',
                authUrge: '1',
                createrName: '石晓峰',
                updaterName: '系统推送',
                applyYear: '2021',
                createValues: [
                    {
                        approvalCreateValueId: '1',
                        createValueId: '1',
                        createValueName: '测试创值场景3-1',
                        applyYear: '2021',
                        'totalProjects|1-3': [
                            {
                                approvalTotalProjectId: '25',
                                totalProjectId: '1',
                                totalProjectName: '测试总额项目3-1-1',
                                onSap: '100',
                                underSap: '200',
                                total: '300',
                                quato: '500',
                                result: '这里是原因',
                            },
                            {
                                approvalTotalProjectId: '26',
                                totalProjectId: '2',
                                totalProjectName: '测试总额项目3-1-2',
                                onSap: '100',
                                underSap: '100',
                                total: '200',
                                quato: '100',
                                result: '这里是原因',
                            },
                        ],
                        'statisticalReports|1-3': [
                            {
                                approvalStatisticalReportId: '2',
                                statisticalReportId: '129',
                                reportName: '测试报表3-1-1',
                                reportImgUrl: '@image(100x100)',
                                reportImg: '@image()',
                            },
                        ],
                        'attachments|1-3': [
                            {
                                approvalAttachmentId: '1',
                                attachmentName: '@ctitle()',
                                attachmentAddress: 'http://www.baidu.com/a.xls',
                                attachmentImageUrl: '@image(100x100)',
                            },
                        ],
                    },
                    {
                        approvalCreateValueId: '2',
                        createValueId: '2',
                        createValueName: '测试创值场景3-2',
                        applyYear: '2021',
                        totalProjects: [
                            {
                                approvalTotalProjectId: '13',
                                totalProjectId: '1',
                                totalProjectName: '测试总额项目3-2-1',
                                onSap: '1000',
                                underSap: '1000',
                                total: '2000',
                                quato: '20009',
                                result: '这里是原因',
                            },
                            {
                                approvalTotalProjectId: '14',
                                totalProjectId: '2',
                                totalProjectName: '测试总额项目3-2-2',
                                onSap: '1000',
                                underSap: '1000',
                                total: '2000',
                                quato: '2000',
                                result: '这里是原因',
                            },
                        ],
                        statisticalReports: [
                            {
                                approvalStatisticalReportId: '3',
                                statisticalReportId: '129',
                                reportName: '测试报表3-2-1',
                            },
                        ],
                        attachments: [
                            {
                                approvalAttachmentId: '1',
                                attachmentName: '@ctitle()',
                                attachmentAddress: 'http://www.baidu.com/a.xls',
                                attachmentImageUrl: '@image(100x100)',
                            },
                        ],
                    },
                ],
                statisticalReports: [],
                'approvalNodes|1-3': [
                    {
                        approvalNodeId: '3',
                        userHeadImageUrl: '@image(100x100)',
                        userId: '10053408',
                        userRoleName: '专家',
                        approvalNodeStatus: '@natural(0, 3)',
                        sortNum: '0',
                        updateTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
                        userName: '@cname()',
                        approvalOpinion: '@cparagraph(1, 5)',
                    },
                ],
            },
        },
    });
}

