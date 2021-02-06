/*
 * Copyright 1999-2021 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const Types = {

    GET_MACHINES_FOR_HOST_PAGEABLE: 'GET_MACHINES_FOR_HOST_PAGEABLE',
    GET_MACHINES_FOR_HOST_PAGEABLE_RESULT: 'GET_MACHINES_FOR_HOST_PAGEABLE_RESULT',

    GET_MACHINES_FOR_POD_PAGEABLE: 'GET_MACHINES_FOR_POD_PAGEABLE',
    GET_MACHINES_FOR_POD_PAGEABLE_RESULT: 'GET_MACHINES_FOR_POD_PAGEABLE_RESULT',
    GET_MACHINES_FOR_NODE_PAGEABLE: 'GET_MACHINES_FOR_NODE_PAGEABLE',
    GET_MACHINES_FOR_NODE_PAGEABLE_RESULT: 'GET_MACHINES_FOR_NODE_PAGEABLE_RESULT',
    BAN_MACHINE: 'BAN_MACHINE',
    BAN_MACHINE_RESULT: 'BAN_MACHINE_RESULT',
    UNBAN_MACHINE: 'UNBAN_MACHINE',
    UNBAN_MACHINE_RESULT: 'UNBAN_MACHINE_RESULT',
    CREATING_FROM_MACHINE_RESULT: 'CREATING_FROM_MACHINE_RESULT',
    GET_MACHINES_FOR_APPLICATION_PAGEABLE: 'GET_MACHINES_FOR_APPLICATION_PAGEABLE',
    GET_MACHINES_FOR_APPLICATION_PAGEABLE_RESULT: 'GET_MACHINES_FOR_APPLICATION_PAGEABLE_RESULT',
    GET_APPLICATION_TOTAL_STATISTICS: 'GET_APPLICATION_TOTAL_STATISTICS',
    GET_APPLICATION_TOTAL_STATISTICS_RESULT: 'GET_APPLICATION_TOTAL_STATISTICS_RESULT',
    GET_HOST_TOTAL_STATISTICS: 'GET_HOST_TOTAL_STATISTICS',
    GET_HOST_TOTAL_STATISTICS_RESULT: 'GET_HOST_TOTAL_STATISTICS_RESULT',

    // Scenario
    GET_SCENARIOS_PAGEABLE: 'GET_SCENARIOS_PAGEABLE',
    GET_SCENARIOS_PAGEABLE_RESULT: 'GET_SCENARIOS_PAGEABLE_RESULT',
    GET_SCENARIOS_STATISTICS: 'GET_SCENARIOS_STATISTICS',
    GET_SCENARIOS_STATISTICS_RESULT: 'GET_SCENARIOS_STATISTICS_RESULT',
    BAN_SCENARIO: 'BAN_SCENARIO',
    BAN_SCENARIO_RESULT: 'BAN_SCENARIO_RESULT',
    UNBAN_SCENARIO: 'UNBAN_SCENARIO',
    UNBAN_SCENARIO_RESULT: 'UNBAN_SCENARIO_RESULT',
    GET_SCENARIO_CATEGORIES: 'GET_SCENARIO_CATEGORIES',
    GET_SCENARIO_CATEGORIES_RESULT: 'GET_SCENARIO_CATEGORIES_RESULT',

    IMPORT_SCENARIOS: 'IMPORT_SCENARIOS',
    IMPORT_SCENARIOS_RESULT: 'IMPORT_SCENARIOS_RESULT',
    GET_SCENARIO_BY_ID: 'GET_SCENARIO_BY_ID',
    GET_SCENARIO_BY_ID_RESULT: 'GET_SCENARIO_BY_ID_RESULT',
    UPDATE_SCENARIO: 'UPDATE_SCENARIO',
    UPDATE_SCENARIO_RESULT: 'UPDATE_SCENARIO_RESULT',
    CREATING_FROM_SCENARIO_RESULT: 'CREATING_FROM_SCENARIO_RESULT',

    GET_EXPERIMENT_STATISTICS: 'GET_EXPERIMENT_STATISTICS',
    GET_EXPERIMENT_STATISTICS_RESULT: 'GET_EXPERIMENT_STATISTICS_RESULT',
    GET_EXPERIMENTS_PAGEABLE: 'GET_EXPERIMENTS_PAGEABLE',
    GET_EXPERIMENTS_PAGEABLE_RESULT: 'GET_EXPERIMENTS_PAGEABLE_RESULT',
    CREATE_EXPERIMENT: 'CREATE_EXPERIMENT',
    CREATE_EXPERIMENT_RESULT: 'CREATE_EXPERIMENT_RESULT',
    GET_EXPERIMENT_BY_ID: 'GET_EXPERIMENT_BY_ID',
    GET_EXPERIMENT_BY_ID_RESULT: 'GET_EXPERIMENT_BY_ID_RESULT',
    GET_TASKS_BY_EXPERIMENT_ID: 'GET_TASKS_BY_EXPERIMENT_ID',
    GET_TASKS_BY_EXPERIMENT_ID_RESULT: 'GET_TASKS_BY_EXPERIMENT_ID_RESULT',
    FAIL_RETRY_EXPERIMENT: 'FAIL_RETRY_EXPERIMENT',
    FAIL_RETRY_EXPERIMENT_RESULT: 'FAIL_RETRY_EXPERIMENT_RESULT',
    END_EXPERIMENT: 'END_EXPERIMENT',
    END_EXPERIMENT_RESULT: 'END_EXPERIMENT_RESULT',
    CLEAR_EXPERIMENT_CREATING_RESULT: 'CLEAR_EXPERIMENT_CREATING_RESULT',
    CLEAR_EXPERIMENT_DETAIL_RESULT: 'CLEAR_EXPERIMENT_DETAIL_RESULT',
    UPDATE_EXPERIMENT: 'UPDATE_EXPERIMENT',
    UPDATE_EXPERIMENT_RESULT: 'UPDATE_EXPERIMENT_RESULT',
    START_EXPERIMENT: 'START_EXPERIMENT',
    START_EXPERIMENT_RESULT: 'START_EXPERIMENT_RESULT',
    QUERY_COLLECT_STATUS: 'QUERY_COLLECT_STATUS',
    QUERY_COLLECT_STATUS_RESULT: 'QUERY_COLLECT_STATUS_RESULT',
    ON_SCENARIO_CATEGORY_CHANGED: 'ON_SCENARIO_CATEGORY_CHANGED',
    ON_SCENARIO_CHANGED: 'ON_SCENARIO_CHANGED',
    ON_EXPERIMENT_NAME_CHANGED: 'ON_EXPERIMENT_NAME_CHANGED',
    ON_METRIC_CHANGED: 'ON_METRIC_CHANGED',
    ON_MACHINES_CHANGED: 'ON_MACHINES_CHANGED',
    ON_DIMENSION_CHANGED: 'ON_DIMENSION_CHANGED',

    GET_K8S_RESOURCE_STATISTICS: 'GET_K8S_RESOURCE_STATISTICS',
    GET_K8S_RESOURCE_STATISTICS_RESULT: 'GET_K8S_RESOURCE_STATISTICS_RESULT',
    GET_KUBERNETES_NAMESPACES: 'GET_KUBERNETES_NAMESPACES',
    GET_KUBERNETES_NAMESPACES_RESULT: 'GET_KUBERNETES_NAMESPACES_RESULT',
    GET_CLUSTER_INFO: 'GET_CLUSTER_INFO',
    GET_CLUSTER_INFO_RESULT: 'GET_CLUSTER_INFO_RESULT',

    GET_ANSIBLE_HOSTS: 'GET_ANSIBLE_HOSTS',
    GET_ANSIBLE_HOSTS_RESULT: 'GET_ANSIBLE_HOSTS_RESULT',
    GET_ANSIBLE_HOSTS_REGISTER: 'GET_ANSIBLE_HOSTS_REGISTER',
    GET_ANSIBLE_HOSTS_REGISTER_RESULT: 'GET_ANSIBLE_HOSTS_REGISTER_RESULT',

    GET_PROBES_PAGEABLE: 'GET_PROBES_PAGEABLE',
    GET_PROBES_PAGEABLE_RESULT: 'GET_PROBES_PAGEABLE_RESULT',
    BAN_PROBE: 'BAN_PROBE',
    BAN_PROBE_RESULT: 'BAN_PROBE_RESULT',
    UNBAN_PROBE: 'UNBAN_PROBE',
    UNBAN_PROBE_RESULT: 'UNBAN_PROBE_RESULT',
    UNINSTALL_PROBE: 'UNINSTALL_PROBE',
    UNINSTALL_PROBE_RESULT: 'UNINSTALL_PROBE_RESULT',
    INSTALL_PROBE_BY_ANSIBLE: 'INSTALL_PROBE_BY_ANSIBLE',
    INSTALL_PROBE_BY_ANSIBLE_RESULT: 'INSTALL_PROBE_BY_ANSIBLE_RESULT',
    QUERY_PROBES_INSTALLATION: 'QUERY_PROBES_INSTALLATION',
    QUERY_PROBES_INSTALLATION_RESULT: 'QUERY_PROBES_INSTALLATION_RESULT',

    FETCH_CHAOSTOOLS_SCENARIOS: 'FETCH_CHAOSTOOLS_SCENARIOS',
    FETCH_CHAOSTOOLS_SCENARIOS_RESULT: 'FETCH_CHAOSTOOLS_SCENARIOS_RESULT',
    GET_CHAOSTOOLS_DEPLOYED_STATISTICS: 'GET_CHAOSTOOLS_DEPLOYED_STATISTICS',
    GET_CHAOSTOOLS_DEPLOYED_STATISTICS_RESULT: 'GET_CHAOSTOOLS_DEPLOYED_STATISTICS_RESULT',
    DEPLOY_CHAOSTOOLS_TO_HOST: 'DEPLOY_CHAOSTOOLS_TO_HOST',
    DEPLOY_CHAOSTOOLS_TO_HOST_RESULT: 'DEPLOY_CHAOSTOOLS_TO_HOST_RESULT',
    UNDEPLOY_CHAOSTOOLS_FOR_HOST: 'UNDEPLOY_CHAOSTOOLS_FOR_HOST',
    UNDEPLOY_CHAOSTOOLS_FOR_HOST_RESULT: 'UNDEPLOY_CHAOSTOOLS_FOR_HOST_RESULT',
    UPGRADE_CHAOSTOOLS_TO_HOST: 'UPGRADE_CHAOSTOOLS_TO_HOST',
    UPGRADE_CHAOSTOOLS_TO_HOST_RESULT: 'UPGRADE_CHAOSTOOLS_TO_HOST_RESULT',
    FETCH_PUBLIC_CHAOSTOOLS: 'FETCH_PUBLIC_CHAOSTOOLS',
    FETCH_PUBLIC_CHAOSTOOLS_RESULT: 'FETCH_PUBLIC_CHAOSTOOLS_RESULT',
    FETCH_CHAOSTOOLS_OVERVIEW: 'FETCH_CHAOSTOOLS_OVERVIEW',
    FETCH_CHAOSTOOLS_OVERVIEW_RESULT: 'FETCH_CHAOSTOOLS_OVERVIEW_RESULT',
    FETCH_CHAOSTOOLS_VERSION_INFO: 'FETCH_CHAOSTOOLS_VERSION_INFO',
    FETCH_CHAOSTOOLS_VERSION_INFO_RESULT: 'FETCH_CHAOSTOOLS_VERSION_INFO_RESULT',

    QUERY_TASK_RESULT: 'QUERY_TASK_RESULT',
    QUERY_TASK_RESULT_RESULT: 'QUERY_TASK_INFO_RESULT_RESULT',
    QUERY_TASK_LOG: 'QUERY_TASK_LOG',
    QUERY_TASK_LOG_RESULT: 'QUERY_TASK_LOG_RESULT',
    QUERY_TASK_MONITOR: 'QUERY_TASK_MONITOR',
    QUERY_TASK_MONITOR_RESULT: 'QUERY_TASK_MONITOR_RESULT',
    HANDLE_ERROR: 'HANDLE_ERROR',
    CLEAR_ERROR: 'CLEAR_ERROR',
    HANDLE_CRITICAL_ERROR: 'HANDLE_CRITICAL_ERROR',
    CLEAR_CRITICAL_ERROR: 'CLEAR_CRITICAL_ERROR',

    QUERY_METRIC_CATEGORY: 'QUERY_METRIC_CATEGORY',
    QUERY_METRIC_CATEGORY_RESULT: 'QUERY_METRIC_CATEGORY_RESULT',
    CLEAR_ANSIBLE_REGISTER_RESULT: 'CLEAR_ANSIBLE_REGISTER_RESULT',

}

export default Types;